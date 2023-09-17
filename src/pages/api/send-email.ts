import { ContactType } from "@/app/models/types/ContactType";
import { GoogleCaptchaCheck } from "@/services/GoogleServices";
import { SmtpService } from "@/services/SMTPService";
import { sanitize } from "isomorphic-dompurify";
import { NextApiRequest, NextApiResponse } from "next";
import * as requestIp from "request-ip";

/**
 * Verifies the google recaptcha token and sends the contact form email
 * @param req 
 * @param res 
 * @returns 
 */
 async function SendEmail(req:NextApiRequest, res:NextApiResponse) {
    const {method} = req;
    res.setHeader('Allow', 'POST');
    const body = req.body;
    const {
        token, 
        name,
        email,
        subject,
        message
    } = body;


    if(!token) {
        return res.status(400).json({error: "Invalid token"});
    }

    switch(method) {
        case "POST": {
            try {
             
                let ip = requestIp.getClientIp(req) ?? "";

                var googleRes = await GoogleCaptchaCheck(token, ip);
            
                if(!googleRes.success) {
                    return res.status(400).json({error: "Failed Captcha"});
                }

                const contactData:ContactType = {
                    name,
                    email,
                    subject,
                    message
                } 

                //Before we send the message we need to clean up the input so we don't get nasty input                
                for(const [key, val] of Object.entries(contactData)) {
                    contactData[key as keyof typeof contactData] = sanitize(val, {
                    USE_PROFILES: {html: false},  ALLOWED_TAGS: [] 
                }).trim();
        }


                const emailRes = await SmtpService({name, email, subject, message});

                if(emailRes) {
                    return res.status(200).json({emailRes})
                }
                
                return res.status(400).json(null);

            } catch (error) {
                return res.status(500).json({error});
            }            
        }
        default:
            res.status(405).end('Method Not Allowed');
    }
}


export default SendEmail;

    //For reference how to get my domain name in next
    // const host = req.headers.host;
    // const protocol = req.headers['x-forwarded-proto'] || 'http';
    // const myDomain = `${protocol}://${host}`

    //If we don't have a token send a bad request response