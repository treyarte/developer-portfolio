import { NextApiRequest, NextApiResponse } from "next";

async function GoogleRecaptchaVerification(req:NextApiRequest, res:NextApiResponse) {
    const {method} = req;

    switch(method) {
        case "Post": {
            console.info(req.body);
            res.json({ok:true});
        }
        default:
            res.redirect("404");
    }
}