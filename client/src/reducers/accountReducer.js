// src/reducers/accountReducer.js
const accountReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return action.payload;
    case 'ADD_ACCOUNT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default accountReducer;

