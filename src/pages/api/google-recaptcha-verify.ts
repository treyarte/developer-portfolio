import { GoogleCaptchaCheck } from "@/services/GoogleServices";
import { NextApiRequest, NextApiResponse } from "next";
import * as requestIp from "request-ip";

/**
 * Verifies the google recaptcha token and sends the contact form email
 * @param req 
 * @param res 
 * @returns 
 */
 async function GoogleRecaptchaVerify(req:NextApiRequest, res:NextApiResponse) {
    const {method} = req;
    res.setHeader('Allow', 'POST');
    const body = req.body;
    const {token} = body;

    //For reference how to get my domain name in next
    // const host = req.headers.host;
    // const protocol = req.headers['x-forwarded-proto'] || 'http';
    // const myDomain = `${protocol}://${host}`

    //If we don't have a token send a bad request response
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

                //TODO send smtp mail

                return res.status(200).json({googleRes})

            } catch (error) {
                return res.status(500).json({error});
            }            
        }
        default:
            res.status(405).end('Method Not Allowed');
    }
}


export default GoogleRecaptchaVerify;