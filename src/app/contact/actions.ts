"use server";

import { Resend } from 'resend';
import { env } from "@/env.mjs";
import { Message } from "./page";
import ContactEmailTemplate from '@/emails/ContactEmailTemplate';

const resend = new Resend(env.RESEND_API_KEY);

export const sendMessage = async (message: Message) => {  
  const { firstName, lastName } = message;

  const data = resend.emails.send({
    from: 'Max Next <onboarding@resend.dev>',
    to: [env.SEND_EMAIL],
    subject: `You have received a message from ${firstName} ${lastName}`,
    react: ContactEmailTemplate({ message, nodeEnv: env.NODE_ENV }),
  })

  return data;
};
