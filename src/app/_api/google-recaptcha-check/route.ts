/**
 * NOT IN USE:
 * Because the next 13 way of doing routes can't get the clients IP address, we
 * have to use the old way of doing things.
 * This is kept as a reference on how to do api routes in next 13.
 * 
 */

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

export async function POST(req:NextRequest) {
    try {
        const bodyJson = await req.json();    
        
        let ip =  req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for") 
                    || req.headers.get("client-ip") || req.ip;
        
        console.info("IP ADDRESS", ip)    
        const token = bodyJson.token;
        return new Response(JSON.stringify({token, myIp:ip}));
        
    } catch (error) {
        console.error(error);             
    }
}