"use server";

import { env } from "@/env.mjs";

import { Message } from "./page";

export const sendMessage = async (data: Message) => {
  console.log(JSON.stringify(data, null, 2));
  console.log('RESEND_API_KEY', env.RESEND_API_KEY);
};
