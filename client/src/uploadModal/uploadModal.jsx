import React, { useState, useEffect } from 'react';
import { addImage } from '../apiService';
import './uploadModal.css';

const UploadModal = ({ onClose }) => {
  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
  const folder = import.meta.env.VITE_CLOUDINARY_FOLDER;
  const [formData, setFormData] = useState({
    imgURL: '',
    item: '',
    tempRange: [],
    rain: false,
  });

  const [image, setImage] = useState('');
  const [tempChecks, setTempChecks] = useState([]); //separate state so I can handle checking/unchecking of boxes

  useEffect(() => {
    if (formData.imgURL === '') {
      //if setFormData is not finished, return early
      return;
    }
    addImage(formData); //post to database
    onClose(); // Close the modal after uploading
  }, [formData.imgURL]);

  const handleChange = (event) => {
    let { name, value } = event.target;

    if (name === 'rain') {
      value = value === 'true';
    }

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleTempChange = (event) => {
    let { value, checked } = event.target;
    value = value.toLowerCase();
    // Case 1 : The user checks the box
    if (checked) {
      setTempChecks((prevTempChecks) => [...prevTempChecks, value]);
    }

    // Case 2  : The user unchecks the box
    else {
      setTempChecks(tempChecks.filter((event) => event !== value));
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    try {
      const fd = new FormData();
      fd.append('file', image);
      fd.append('folder', folder);
      fd.append('upload_preset', uploadPreset);
      fd.append('resorce_type', 'image');

      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const options = {
        method: 'POST',
        body: fd,
      };
      const response = await fetch(url, options).then((res) => res.json()); //just needed to parse the response body :-)

      const resURL = response.secure_url;

      setFormData((formData) => ({
        ...formData,
        imgURL: resURL,
        tempRange: [...tempChecks],
      }));
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}></span>

        <form onSubmit={handleUpload}>
          <h2>Upload a new clothing item!</h2>

          <fieldset>
            <label htmlFor="file">Choose a picture to upload</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
            />
          </fieldset>

          <fieldset>
            <legend>What type of clothing item is this?</legend>
            <div>
              <input
                type="radio"
                id="top"
                name="item"
                value="Top"
                checked={formData.item === 'Top'}
                onChange={handleChange}
              />
              <label htmlFor="top">Top</label>
            </div>
            <div>
              <input
                type="radio"
                id="bottom"
                name="item"
                value="Bottom"
                checked={formData.item === 'Bottom'}
                onChange={handleChange}
              />
              <label htmlFor="bottom">Bottom</label>
            </div>
            <div>
              <input
                type="radio"
                id="shoe"
                name="item"
                value="Shoe"
                checked={formData.item === 'Shoe'}
                onChange={handleChange}
              />
              <label htmlFor="shoe">Shoe</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>For which temperature is it comfortable?</legend>
            <div>
              <input
                type="checkbox"
                id="cold"
                name="tempRange"
                value="Cold"
                //checked={formData.tempRange === 'Cold'}
                onChange={handleTempChange}
              />
              <label htmlFor="cold">Cold</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="cool"
                name="tempRange"
                value="Cool"
                //checked={formData.tempRange === 'Cool'}
                onChange={handleTempChange}
              />
              <label htmlFor="cool">Cool</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="warm"
                name="tempRange"
                value="Warm"
                //checked={formData.tempRange === 'Warm'}
                onChange={handleTempChange}
              />
              <label htmlFor="warm">Warm</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hot"
                name="tempRange"
                value="Hot"
                //checked={formData.tempRange === 'Hot'}
                onChange={handleTempChange}
              />
              <label htmlFor="hot">Hot</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Can it be worn when it rains?</legend>
            <div>
              <input
                type="radio"
                id="yes"
                name="rain"
                value={true}
                checked={formData.rain === true}
                onChange={handleChange}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="rain"
                value={false}
                checked={formData.rain === false}
                onChange={handleChange}
              />
              <label htmlFor="no">No</label>
            </div>
          </fieldset>

          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
