import { NextRequest } from "next/server";

const CAPTCHA_KEY = process.env.RECAPTCHA_SECRET_KEY;


export async function POST(request:NextRequest) {
    try {
        const bodyJson = await request.json();    
        //@ts-ignore
        let ip =  request.headers['x-forwarded-for']  || request.ip;
  
        console.info("IP ADDRESS", ip)    
        const token = bodyJson.token;
        return new Response(JSON.stringify({token, ip}));
        
    } catch (error) {
        console.error(error);             
    }
}