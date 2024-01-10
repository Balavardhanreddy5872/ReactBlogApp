// src/components/DeleteAccountForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAccount } from '../actions/accountActions';
import './AddAccountForm.css';

const DeleteAccountForm = () => {
  const dispatch = useDispatch();
  const [accountNumber, setAccountNumber] = useState('');

  const handleDeleteAccount = () => {
    dispatch(deleteAccount(accountNumber));
    setAccountNumber('');

    alert(`checkout succesfull.`);
  };

  return (
    <div className="form-container">
      <h2>Delete Blog</h2>
      <form>
        <label>Blog_ID: </label>
        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
        <br />
        <br />
        <button type="button" onClick={handleDeleteAccount}>
          Delete Blog
        </button>
      </form>
    </div>
  );
};

export default DeleteAccountForm;
