import {ContactFormBody} from "../models/contactFormBody";
const nodemailer = require('nodemailer');
const gmailEmail: string = process.env.EMAIL  as string;
const gmailPassword: string = process.env.PASS as string;


export interface MailOptions {
    from: any;
    to: string;
    subject: string;
    html: string;
}

const mailerCtrl = {
    sendContactFormEmail:  (formBody: ContactFormBody) => {
        try {
            console.log("gmailEmail", gmailEmail)
            console.log("gmailPassword", gmailPassword)
            const mailOptions: MailOptions = {
                from: gmailEmail, // sender address
                to: gmailEmail, // email of the user who bought the tree
                subject: formBody.subject, // Subject line
                html: formBody.message, // html body
            };

            return mailerCtrl.wrappedSendMail(mailOptions);

        } catch (e) {
            console.error(e);
            return e;
        }

    },
    wrappedSendMail: async  (mailOptions:MailOptions)=> {
        return new Promise((resolve, reject) => {

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465,
                auth: {
                    user: gmailEmail,
                    pass: gmailPassword,
                },
            });

            transporter.sendMail(mailOptions, function (error:any, info:any) {
                if (error) {
                    console.log("error is " + error);
                    resolve(false); // or use rejcet(false) but then you will have to handle errors
                } else {
                    console.log('Email sent: ' + info.response);
                    resolve(true);
                }
            });
        })
    }
};

module.exports = mailerCtrl;
