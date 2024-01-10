
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBlog } from '../actions/accountActions';
import './AddAccountForm.css';

const GetBlogForm = () => {
  const dispatch = useDispatch();
  const [accountNumber, setAccountNumber] = useState('');
  const [title, setTitle] = useState(null);
  const [content, setcontent] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);

  const handleGetBlog = async () => {
    const result = await dispatch(getBlog(accountNumber));
    if (result) {
      setTitle(result.title);
      setcontent(result.content);
      setMobileNumber(result.mobileNumber);
    }
  };

  return (
    <div className="form-container">
      <h2>Get Blog Details</h2>
      <form>
        <label>Blog_ID: </label>
        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
        <br />
        <button type="button" onClick={handleGetBlog}>
          Get Blog details
        </button>
      </form>
      <div className="details-container"> 
      {title!== null && <p>Title: {title}</p>}
      {content!== null && <p>Content: {content}</p>}
      {mobileNumber!== null && <p>mobileNumber: {mobileNumber}</p>}
      </div>
    </div>
  );
};

export default GetBlogForm;
