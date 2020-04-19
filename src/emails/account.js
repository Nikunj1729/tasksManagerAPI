const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: "niks1729.smarty@gmail.com",
      subject: "Thanks for joining in!",
      text: `Welcome to the app ${name}. Let me know how you get along with the app.`,
    });
    console.log("email, name", email, name);
  } catch (error) {
    console.error(error.toString());
    const { message, code, response } = error;
    const { headers, body } = response;
    console.log("message", message);
    console.log("code", code);
    console.log("headers", headers);
    console.log("body", body);
  }
};

const cancelAccountEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: "niks1729.smarty@gmail.com",
      subject: "Sorry to see you go!",
      text: `Goodbuy, ${name}. I hope to see you back sometime soon.`,
    });
  } catch (error) {
    console.error(error.toString());
    const { message, code, response } = error;
    const { headers, body } = response;
    console.log("message", message);
    console.log("code", code);
    console.log("headers", headers);
    console.log("body", body);
  }
};

module.exports = {
  sendWelcomeEmail,
  cancelAccountEmail,
};
