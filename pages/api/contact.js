require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const generateHTMLForPersonalMail = (
  message,
  email
) => {
  return `
    <div>
      <h5>Recived Message:</h5>
      <p>${message}</p>
    </div>
    <p>Sent from: ${email}</p>
  `
}

const generateHTMLForWelcomeMail = (
  name
) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Welcome Message</title>
    </head>
    <body>
    <div style="background-color: #f5f5f5; padding: 20px;">
      <h1 style="color: #000; font-size: 24px;">Dear ${name},</h1>
      <p style="color: #333; font-size: 16px;">Thank you for reaching out to me. I appreciate your interest in my services/products and taking the time to fill out the contact form. I'm delighted to hear from you and I will respond as soon as possible.</p>
      <p style="color: #333; font-size: 16px;">Your message is important to me, and I strive to provide the best customer service experience possible. I assure you that I will review your message thoroughly and respond with the necessary information within the next 24-48 hours. If your inquiry requires urgent attention, please do not hesitate to call on provided number on the site.</p>
      <p style="color: #333; font-size: 16px;">Once again, thank you for contacting me, and I look forward to helping you with your needs.</p>
      <p style="color: #333; font-size: 16px;">Best regards,</p>
      <p style="color: #333; font-size: 16px;">Akshay Moradiya</p>
    </div>
  </body>
  </html>
  
  `
}

const sendEmail = (
  mailOption,
) => {
  return new Promise(function(resolve, reject) {
    transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.log(err);
        reject(JSON.stringify(err?.message || err))
      } else {
        resolve(data);
      }
    })
  })
}

const sendWelcomeEmail = (
  name,
  email
) => {
  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: `${email}`,
    subject: `Thank you for Contacting Akshay Moradiya - Confirmation Receipt of Your Message`,
    html: generateHTMLForWelcomeMail(name)
  }

  return new Promise(function (resolve, reject) {
    sendEmail(mailOption).then((response) => {
      if(response){
        resolve(response)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export default async function (req, res) {

  const { name = "", email = "", message = ""} = req.body;
  
  const mailOption = {
    from: `${email}`,
    to: `${process.env.EMAIL}`,
    subject: `New mail from ${name}`,
    text: message + " | Sent from: " + email,
    html: generateHTMLForPersonalMail(message, email)
  };

  sendEmail(mailOption).then(response => {
    if(response) {
      res.status(200).send({
        status: 200,
        message: "Mail Recevied successfully"
      });
      sendWelcomeEmail(name, email)
      .then(() => console.log("client message sent successfully"))
      .catch(err => console.log(err))
    }
  }).catch(err => {
    res.status(500).send({
      status: 500,
      message : JSON.stringify(err?.message || err)
    });
  });
}