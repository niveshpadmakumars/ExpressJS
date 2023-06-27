const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./Controller/controller');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

const authenticateFields = (req, res, next) => {
  const { email, subject, content } = req.body;

  if (!email || !subject || !content) {
    return res.status(400).send('Missing required fields.');
  }
  next();
};

app.post('/send-email', authenticateFields, controller.sendEmail) 

//path defining - frontend
app.get('/', (req, res,) => {
  res.sendFile(path.join(__dirname, 'index.html'));  //route handling
});

//app.post('/send-email', controller.sendEmail); 

//server starting
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});