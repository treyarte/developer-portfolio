import { ContactType } from "@/app/models/types/ContactType";
import nodemailer from "nodemailer";

const appPass = process.env.SMTP_APP_PASS;
const emailUser = process.env.SMTP_USER;

//Our transport for sending mail
const transporter = nodemailer.createTransport({
    service: 'gmail',    
    host: "smtp.gmail.com",
    // port: 456,
    // secure: true,
    auth: {
        user:emailUser,
        pass:appPass
    },
});

/**
 * Service that will use GMAIL SMTP to send an email to me
 * @param contactFormInfo 
 * @returns 
 */
export async function SmtpService(contactFormInfo:ContactType) {
    try {
        const {
            name,
            email,
            subject,
            message
        } = contactFormInfo;
    
        const formattedMsg = "<h1>Email From Portfolio</h1>" +
        "<br/><br/>" +
        "The Following information was submitted from your portfolio contact page on<br/>" +        
        "<br/><br/>" +
        "=============================" +
        "<br/><br/>" +
        "<table border='0' cellspacing='0' cellpadding='0'>" +
        `<tr><td>Name: </td><td>&nbsp;${name}</td></tr>` +
        `<tr><td>email: </td><td>&nbsp;${email}</td></tr>` +
        `<tr><td>subject: </td><td>&nbsp;${subject}</td></tr>` +
        `<tr><td>message: </td><td>&nbsp;${message}</td></tr>` +                        
        "</table>";

        const mailOpts = {
            from: `${email}`,
            to: emailUser,
            subject: `Portfolio Contact Form ${subject}`,
            html:formattedMsg
        }

        const info = await transporter.sendMail(mailOpts);
                
        return info.messageId;
    } catch (error) {
        console.error(error);
        return null;
    }

}