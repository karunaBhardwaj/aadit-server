var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");



const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
// sgMail.setApiKey('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');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.post('/sendMail', async (req, res) => {
  try {
    const msg = req.body;
    let transporter = nodemailer.createTransport({
      host: "mail.aaditlife.com",
      port: 465,
      secure: true,
      auth: {
        user: "support@aaditlife.com",
        pass: "support"
      }
    });
    const info = await transporter.sendMail(msg);
    console.log("info: ", info);
    return res.status(200).send("success");
  } catch(err) {
    console.log("Error: ", err);
    return res.status(500).send("Unknown error oddured, please try again");
  }
});

module.exports = router;
