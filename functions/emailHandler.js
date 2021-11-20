const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.REACT_APP_USER,
        pass: process.env.REACT_APP_PASS
    }
})
let mailOptions = {
    from: '',
    to: "rwat907@gmail.com",
    subject: "",
    text: ""
}
exports.handler = async function (event, context) {
    const email = event.queryStringParameters.email;
    const message = event.queryStringParameters.message;
    mailOptions = { ...mailOptions, from: email, subject: "Feedback of MovieZone", text: message }
    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            console.log(err)
        } else {
            return {
                statusCode: 200,
                body: "Message Sent"
            }
        }
    })
    return {
        statusCode: 200,
        body: "Message Sent"
    }
}