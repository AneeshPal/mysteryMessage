import { resend } from "resend";

export const resend=new resend(process.env.RESEND_API_KEY);