import { NextRequest } from "next/server";
import * as requestIp from "request-ip";

const CAPTCHA_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function GET(req:any, res:any) {
    try {
        let ip =  requestIp.getClientIp(req);
        return new Response(JSON.stringify({ip}));
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({error}));
    }
}

export async function POST(request:NextRequest) {
    try {
        const bodyJson = await request.json();    
        //@ts-ignore
        let ip =  requestIp.getClientIp(request);
        
        console.info("IP ADDRESS", ip)    
        const token = bodyJson.token;
        return new Response(JSON.stringify({token, myIp:ip}));
        
    } catch (error) {
        console.error(error);             
    }
}