const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./Controller/controller');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

//path defining - frontend
app.get('/', (req, res,) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/send-email', controller.sendEmail); //route handling

//server starting
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});