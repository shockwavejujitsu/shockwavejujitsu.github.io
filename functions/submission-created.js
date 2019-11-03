'use strict';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = function(event, context, callback) {
    console.log('+++ event: ', event);

    let inboxEmail = 'shockwavejujitsu@gmail.com'
    let formData = JSON.parse(event.body).data;

    let html = `<h1>Form submission from ${formData.name}</h1>
                <p><strong>Email Address:</strong> ${formData.email}</p>
                <p><strong>Message:</strong> ${formData.message}</p>`;

    const msg = {
        to: inboxEmail,
        from: formData.email,
        subject: 'Website Contact Form Submission',
        text: formData.message,
        html: html,
    };

    sgMail.send(msg);
}