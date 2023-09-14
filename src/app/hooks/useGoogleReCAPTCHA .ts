import { useEffect } from "react"

const clientKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

/**
 * Hook for adding the reCaptcha scripts
 */
export const useGoogleReCAPTCHA = () => {

    useEffect(() => {        
        const script = document.createElement("script");
        
        script.async = true;
        
        script.src=`https://www.google.com/recaptcha/api.js`

        document.head.appendChild(script);   

        return () => {
            document.head.removeChild(script);
        }

    },[]);
}