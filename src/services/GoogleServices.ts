
import { GoogleCaptchaReq } from "@/app/models/types/GoogleCaptchaReq";
import { GoogleCaptchaRes } from "@/app/models/types/GoogleCaptchaRes";

import axios from "axios";

const googleVerifyUrl = "https://www.google.com/recaptcha/api/siteverify";
const CAPTCHA_KEY = process.env.RECAPTCHA_SECRET_KEY || "";

//Options for axios that will auto format our data for x-www-form-urlencoded
const axiosOpts = {
    headers: {'content-type': 'application/x-www-form-urlencoded'}
}

/**
 * Makes a call to the google api to verify the captcha request
 * NOTE: Google recaptcha doesn't accept json and only accepts application/x-www-form-urlencoded or query params
 * @param token 
 * @param ip 
 * @returns 
 */
export async function GoogleCaptchaCheck(token:string, ip:string) : Promise<GoogleCaptchaRes> {
    try {
        const googleReq:GoogleCaptchaReq = {
            secret: CAPTCHA_KEY,
            response: token,
            remoteIp: ip
        }

        //If we were going to use params (we are not going to) this is how we would do it
        // const params = new URLSearchParams();
        // for (const [key, val] of Object.entries(googleReq)) {
        //     params.append(key, val);
        // }

        const res = await axios.post(googleVerifyUrl, googleReq,  {...axiosOpts});
        return res.data;
    } catch (error) {
        console.error(error);
        const failedRes:GoogleCaptchaRes = {
            success: false,
            challengeTs: "",
            hostname: "",
            errorCodes: ["SERVER ERROR"]
        }
        return failedRes;
    }
}
