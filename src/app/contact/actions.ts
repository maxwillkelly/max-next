"use server";

import { Message, messageSchema } from "./_components/ContactForm";
import ContactEmailTemplate from "@/emails/ContactEmailTemplate";
import { env } from "@/env.mjs";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export const sendMessage = async (message: Message) => {
  messageSchema.parse(message);

  const { firstName, lastName } = message;

  const data = resend.emails.send({
    from: "Max Next <onboarding@resend.dev>",
    to: [env.SEND_EMAIL],
    subject: `You have received a message from ${firstName} ${lastName}`,
    react: ContactEmailTemplate({ message, nodeEnv: env.NODE_ENV }),
  });

  return data;
};
