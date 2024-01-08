const nodemailer = require("nodemailer");
require("dotenv").config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_EMAIL_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(fromMail, text , name) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    // from: '"Fred Foo 👻" <foo@example.com>', // sender address
    from: fromMail,
    to: "honey.sahith29@gmail.com", // list of receivers
    subject: "subject", // Subject line
    text: "Normal text", // plain text body
    html: `  
    <div style="text-align: center;">
    <div style="color: yellowgreen; margin-bottom: 1rem;">
      from ${fromMail}
      <div>
        name ${name}
      </div>
    </div>

    <div>
      ${text}
    </div>
  </div>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

module.exports = { main }