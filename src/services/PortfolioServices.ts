import axios from "axios";

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