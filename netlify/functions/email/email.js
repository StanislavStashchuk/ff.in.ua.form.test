const sendgridMail = require('@sendgrid/mail');

sendgridMail.setApiKey(process.env.SENDGRID_TEST_API_KEY);

console.log(process.env.EMAIL_FROM);

const {EMAIL_FROM, EMAIL_TO} = process.env;

exports.handler = async function sendMail(event) {
  const {
    name,
    message
  } = event.body;

  const msg = {
    to: EMAIL_TO,
    from: EMAIL_FROM,
    subject: 'Contact Message from user${email}',
    text: `Message from ${name}`,
    html: `Message from ${name} : ${message}`,
  };

  console.log(msg);

  try {
    await sendgridMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);

      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*' // Required for CORS support to work
        },
        body: JSON.stringify({
          message: `Error: ${JSON.stringify(error.response.body)}`
        })
      };
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*' ,// Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Success!'
    }),
  };
};