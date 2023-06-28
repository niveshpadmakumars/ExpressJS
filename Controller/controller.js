const nodemailer = require('nodemailer');

function sendEmail(req, res) {
  const { email, subject, content } = req.body;

  // noemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'niveshpadmakumar.s@gmail.com', 
      pass: 'lwafxbsihxlhwjbo' 
    }
  });

  // email,subject,content
  const mailOptions = {
    from: 'niveshpadmakumar.s@gmail.com', 
    to: email,
    subject: subject,
    text: content
  };

  // mail sending
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
}

module.exports = {
  sendEmail
};