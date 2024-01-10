import axios from 'axios';

// to get all the  blog  details 
export const fetchAccounts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/accounts');
    dispatch({ type: 'FETCH_ACCOUNTS', payload: response.data });
  } catch (error) {
    console.error('Error fetching accounts:', error);
  }
};


//  to add the blog 
export const addAccount = (account) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/accounts',
      account
    );
    dispatch({ type: 'ADD_ACCOUNT', payload: response.data });
  } catch (error) {
    console.error('Error adding account:', error);
  }
};


// get single blog  details 
export const getBlog = (accountNumber) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/accounts/blog/${accountNumber}`
    );
    return response.data;
  } catch (error) {
    console.error('Error getting balance:', error);
  }
};

// delete blog by blog id  
export const deleteAccount = (accountNumber) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/accounts/delete/${accountNumber}`);
    dispatch({ type: 'DELETE_ACCOUNT', payload: accountNumber });
  } catch (error) {
    console.error('Error deleting account:', error);
  }
};