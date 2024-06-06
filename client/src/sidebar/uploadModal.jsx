import React, { useState, useEffect } from 'react';
import { addImage } from '../apiService';
import './uploadModal.css';

const UploadModal = ({ onClose }) => {
  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

  const [formData, setFormData] = useState({
    imgURL: '',
    item: '',
    tempRange: '',
    rain: false,
  });

  const [image, setImage] = useState('placeholder');

  let resURL = '';

  useEffect(() => {
    setFormData((formData) => ({
      //TODO figure out how to get it set before using addImage!!!
      ...formData,
      imgURL: resURL,
    }));
    console.log('formData in first useEffect', formData);
  }, []);

  useEffect(() => {
    console.log('formData in second useEffect', formData);
    addImage(formData);
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

  const handleUpload = async (event) => {
    event.preventDefault();

    try {
      const fd = new FormData();
      fd.append('file', image);
      fd.append('upload_preset', uploadPreset);
      fd.append('resorce_type', 'image');

      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const options = {
        method: 'POST',
        body: fd,
      };
      const response = await fetch(url, options).then((res) => res.json()); //just needed to parse the response body :-)

      resURL = response.secure_url;
      console.log('formData from modal', resURL);

      console.log('data from modal', formData);

      onClose(); // Close the modal after uploading
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
                type="radio"
                id="cold"
                name="tempRange"
                value="Cold"
                checked={formData.tempRange === 'Cold'}
                onChange={handleChange}
              />
              <label htmlFor="cold">Cold</label>
            </div>
            <div>
              <input
                type="radio"
                id="cool"
                name="tempRange"
                value="Cool"
                checked={formData.tempRange === 'Cool'}
                onChange={handleChange}
              />
              <label htmlFor="cool">Cool</label>
            </div>
            <div>
              <input
                type="radio"
                id="warm"
                name="tempRange"
                value="Warm"
                checked={formData.tempRange === 'Warm'}
                onChange={handleChange}
              />
              <label htmlFor="warm">Warm</label>
            </div>
            <div>
              <input
                type="radio"
                id="hot"
                name="tempRange"
                value="Hot"
                checked={formData.tempRange === 'Hot'}
                onChange={handleChange}
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
