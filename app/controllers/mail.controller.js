const nodemailer = require('nodemailer');

exports.send = function (options) {
    return new Promise((resolve, reject) => {
        "use strict";
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.miraclesoft.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'vbasavaraje@miraclesoft.com', // generated ethereal user
                pass: 'April@2019' // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        // setup email data with unicode symbols  -  schonkar@miraclesoft.com
        if (options.to) {
            console.log("Sending Mail to : ", options.to);
        } else {
            console.log("Sending Mail to : ", options.bcc);
        }

        // send mail with defined transport object
        transporter.sendMail(options, (error, info) => {
            if (error) {
                console.log(error);
                reject(error)
            } else {
                resolve(info)
            }
        });

    })
};
