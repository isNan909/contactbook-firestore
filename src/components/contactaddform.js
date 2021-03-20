import { useState } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../utils/config';
import { v4 as uuidv4 } from 'uuid';

import '../styles/addcontact.css';

function ContactAddForm() {
  const [imageUrl, setImageUrl] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    id: uuidv4(),
    Name: '',
    Cellphone: '',
    Homephone: '',
    Relation: '',
    image: imageUrl,
    imageName: '',
  });
  const ref = firebase.firestore().collection('contactbook');
  const handleOnChange = (userKey, value) => {
    setContact({ ...contact, [userKey]: value });
  };

  const handleFileChange = async (e) => {
    const contactImage = e.target.files[0];
    const storageRef = firebase.storage().ref('img/');
    const fileRef = storageRef.child(contactImage.name);
    await fileRef.put(contactImage);
    const imageUrl = await fileRef.getDownloadURL();
    setImageUrl(imageUrl);
    setContact({ ...contact, image: imageUrl, imageName: contactImage.name });
    console.log(imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await ref
      .doc(contact.id)
      .set(contact)
      .then(() => {
        setContact({
          Name: '',
          Cellphone: '',
          Homephone: '',
          Relation: '',
          image: '',
        });
      })
      .catch((err) => {
        console.error(err);
      });
    setLoading(false);
  };

  return (
    <>
      <div className="d-flex goback flex-column">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.70703 14.707C7.5195 14.8945 7.26519 14.9998 7.00003 14.9998C6.73487 14.9998 6.48056 14.8945 6.29303 14.707L2.29303 10.707C2.10556 10.5195 2.00024 10.2652 2.00024 10C2.00024 9.73485 2.10556 9.48054 2.29303 9.29301L6.29303 5.29301C6.48163 5.11085 6.73423 5.01006 6.99643 5.01234C7.25863 5.01461 7.50944 5.11978 7.69485 5.30519C7.88026 5.4906 7.98543 5.74141 7.9877 6.00361C7.98998 6.26581 7.88919 6.51841 7.70703 6.70701L5.41403 9.00001H17C17.2652 9.00001 17.5196 9.10537 17.7071 9.2929C17.8947 9.48044 18 9.73479 18 10C18 10.2652 17.8947 10.5196 17.7071 10.7071C17.5196 10.8947 17.2652 11 17 11H5.41403L7.70703 13.293C7.8945 13.4805 7.99982 13.7348 7.99982 14C7.99982 14.2652 7.8945 14.5195 7.70703 14.707Z"
              fill="#4A60E4"
            />
          </svg>

          <Link to="/">Go back</Link>
        </div>

        <h4>Please add your new contact</h4>
      </div>
      <div className="contactadd">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name of My Friend
            </label>
            <input
              type="name"
              value={contact.Name}
              onChange={(e) => handleOnChange('Name', e.target.value)}
              className="form-control"
              id="NameInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="numberphone" className="form-label">
              Mobile phone
            </label>
            <input
              type="number"
              value={contact.Cellphone}
              onChange={(e) => handleOnChange('Cellphone', e.target.value)}
              className="form-control"
              id="phoneInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="numberhome" className="form-label">
              Home phone
            </label>
            <input
              type="number"
              value={contact.Homephone}
              onChange={(e) => handleOnChange('Homephone', e.target.value)}
              className="form-control"
              id="phoneHome"
            />
          </div>
          <div className="mb-3 mt-4">
            <select
              value={contact.Relation}
              onChange={(e) => handleOnChange('Relation', e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Select relation category</option>
              <option value="friend">Friend</option>
              <option value="cousin">Cousin</option>
              <option value="family">Family</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="formFile" className="form-label">
              Upload Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </>
            ) : null}
            {!loading ? <>Add my new contact</> : null}
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactAddForm;
