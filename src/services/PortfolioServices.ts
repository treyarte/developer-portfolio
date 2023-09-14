import axios from "axios";

/**
 * Makes request to next api to validate the google recaptcha token
 */
export async function validateGoogleCaptcha(token:string) {
    try {
        const res = await axios.post("http://localhost:3000/api/google-recaptcha-check", {token});
        return res.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}