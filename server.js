const express = require('express');
const path = require('path');
const controller = require('./Controller/controller');
//const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const auth = (req, res, next) => {
  const { email, subject, content } = req.body;
  if (!email || !subject || !content) {
    return res.status(400).send('enter the required fields.');
  }
  next();
};
app.post('/send-email', auth, controller.sendEmail) 

//path defining - frontend
app.get('/', (req, res,) => {
  res.sendFile(path.join(__dirname, 'index.html'));  //route handling
});

//server starting
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});