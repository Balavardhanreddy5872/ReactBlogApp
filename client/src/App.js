import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts, addAccount } from './actions/accountActions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountList from './components/AccountList';
import AddAccountForm from './components/AddAccountForm';
import DeleteAccountForm from './components/DeleteAccountForm';
import Navbar from './components/Navbar';
import GetBlogForm from './components/GetBlogForm';

function App() {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navbar />
        <h1 style={{textAlign:'center'}}>Blog App</h1>
        <br />

        <Routes>
          <Route path="/get-blog" element={<AccountList accounts={accounts} />} />
          <Route path="/" element={<AddAccountForm />} />
          <Route path="/get-balance" element={<GetBlogForm />} />
          <Route path="/delete-account" element={<DeleteAccountForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
