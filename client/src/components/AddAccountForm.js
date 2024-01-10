import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAccount } from '../actions/accountActions';
import './AddAccountForm.css';

const AddAccountForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [accountDetails, setAccountDetails] = useState(null);

  const generateAccountNumber = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const handleAddAccount = () => {
    if (mobileNumber.length !== 10) {
      alert('Mobile number should be 10 digits.');
      return;
    }


    if (title.length < 5) {
      alert('Title should be at least 5 characters.');
      return;
    }

    const accountNumber = generateAccountNumber();

    dispatch(addAccount({ accountNumber, title, content, mobileNumber }));

    setAccountDetails({
      accountNumber,
      title,
      content,
      mobileNumber,
    });

    alert('Blog added successfully.');

    setTitle('');
    setContent('');
    setMobileNumber('');
  };

  return (
    <div className="form-container">
      <h2>Add Blog</h2>
      <form>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Content:</label>
        <textarea
          type="text"
          rows={5}
          cols={30}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label>Mobile Number:</label>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleAddAccount}>
          Add Blog
        </button>
      </form>

      {accountDetails && (
        <div className="details-container">
          <h3>Blog Details</h3>
          <p>Blog_ID: {accountDetails.accountNumber}</p>
          <p>Title: {accountDetails.title}</p>
          <p>Content: {accountDetails.content}</p>
          <p>Mobile Number: {accountDetails.mobileNumber}</p>
        </div>
      )}
    </div>
  );
};

export default AddAccountForm;
