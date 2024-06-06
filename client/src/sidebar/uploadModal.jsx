import React, { useState } from 'react';
import './uploadModal.css';
import { PiPlaceholder } from 'react-icons/pi';

const UploadModal = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const cloudName = 'dmsktnqsm';
  const uploadPreset = 'ae3caiip';

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset); // replace with your upload preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/~${cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await response.json();
      console.log('Upload successful', data);
      onClose(); // Close the modal after uploading
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}></span>

        <form method="post" enctype="multipart/form-data">
          <h2>Upload a new clothing item!</h2>

          <fieldset>
            <label htmlFor="file">Choose a picture to upload</label>
            <input
              type="file"
              id="file"
              name="file"
              multiple
              onChange={handleFileChange}
            />
          </fieldset>

          <fieldset>
            <legend>What type of clothing item is this?</legend>
            <div>
              <input type="radio" id="top" name="clothing-item" />
              <label htmlFor="top">Top</label>
            </div>
            <div>
              <input type="radio" id="bottom" name="clothing-item" />
              <label htmlFor="bottom">Bottom</label>
            </div>
            <div>
              <input type="radio" id="shoe" name="clothing-item" />
              <label htmlFor="shoe">Shoe</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>For which temperature is it comfortable?</legend>
            <div>
              <input type="radio" id="cold" name="temperature" />
              <label htmlFor="cold">Cold</label>
            </div>
            <div>
              <input type="radio" id="cool" name="temperature" />
              <label htmlFor="cool">Cool</label>
            </div>
            <div>
              <input type="radio" id="warm" name="temperature" />
              <label htmlFor="warm">Warm</label>
            </div>
            <div>
              <input type="radio" id="hot" name="temperature" />
              <label htmlFor="hot">Hot</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Can it be worn when it rains?</legend>
            <div>
              <input type="radio" id="yes" name="rain" />
              <label htmlFor="">Yes</label>
            </div>
            <div>
              <input type="radio" id="no" name="rain" />
              <label htmlFor="">No</label>
            </div>
          </fieldset>

          <button onClick={handleUpload}>Upload</button>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
