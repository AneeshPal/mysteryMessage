import {resend} from "@/lib/resend";

import VerificationEmail from "emails/VerificationEmail"

import {ApiResponse} from "@/types/ApiResponse";
import { string } from "@/node_modules/zod/index.cjs";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string,
):Promise<ApiResponse>{
    try{
        await resend.emails.send({
            from:"onboarding@resend.dev",
            to:email,
            subject:"Mystery message | Verification code",
            react:
            VerificationEmail({
                username,otp:verifyCode }),
        });

        return {success:true,message:"Verification email send successfully"}

    }catch( emailError){
        console.error("Error sending verification email")
        return {success:false, messsage:"Failed to send verification email"}  // we have return so that promise is not left pending 
    }
}