"use server";

import { Message } from "./page";

export const sendMessage = async (data: Message) => {
  console.log(JSON.stringify(data, null, 2));
};
