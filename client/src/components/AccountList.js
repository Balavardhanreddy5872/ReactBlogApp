import React from 'react';
import './AccountList.css';

const AccountList = ({ accounts }) => {
  return (
    <div className="account-list-container">
      <h2 className="header">ALL BLOGS</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account._id} className="blog-item">
            <h3>Blog ID: {account.accountNumber}</h3>
            <h4>Title: {account.title}</h4>
            <p>Content: {account.content}</p>
            <p>Mobile Number: {account.mobileNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
