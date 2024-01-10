// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// connecting to mongodb database
mongoose.connect('mongodb://0.0.0.0/blogApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const accountSchema = new mongoose.Schema({
  accountNumber: String,
  title : String,
  mobileNumber: String,
  content: String ,
});

const Account = mongoose.model('Account', accountSchema);

// get all blog  details 
app.get('/api/accounts', async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// add or create new blog 
app.post('/api/accounts', async (req, res) => {
  try {
    const { accountNumber,title,content,mobileNumber } = req.body;
    const newAccount = new Account({ accountNumber,title,content,mobileNumber});
    await newAccount.save();
    res.json(newAccount);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// get blog by blog id 
app.get('/api/accounts/blog/:accountNumber', async (req, res) => {
  try {
    const accountNumber = req.params.accountNumber;
    const account = await Account.findOne({ accountNumber });
    if (account) {
      res.json({ title: account.title, content: account.content,mobileNumber:account.mobileNumber});
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// delete blog by blog id  
app.delete('/api/accounts/delete/:accountNumber', async (req, res) => {
  try {
    const accountNumber = req.params.accountNumber;
    const result = await Account.deleteOne({ accountNumber });
    if (result.deletedCount > 0) {
      res.json({ message: 'Account deleted successfully' });
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
