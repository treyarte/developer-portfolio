import { ContactType } from "@/app/models/types/ContactType";
import axios from "axios";

/**
 * Client side functions that are meant to be used of the client to communicate with the api backend
 */

/**
 * Makes request to next api to validate the google recaptcha token
 */
export async function validateGoogleCaptcha(token:string, url:string) {
    try {
        const res = await axios.post(`${window.location.origin}/api/google-recaptcha-verify`, {token});
        return res.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

/**
 * Cleans up data and calls the api send email endpoint
 * @param token 
 * @param url 
 * @returns 
 */
export async function sendVerifyAndSendMail(token:string, contactData:ContactType) {
    try {
        //PURIFY data

        const res = await axios.post(`${window.location.origin}/api/send-email`, {token, ...contactData});
        return res.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}