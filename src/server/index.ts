import { publicProcedure, router } from "./trpc";
import ContactEmailTemplate from "@/emails/ContactEmailTemplate";
import { env } from "@/env.mjs";
import { contactMessageSchema } from "@/shared/contactMessage";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(env.RESEND_API_KEY);

export const appRouter = router({
  sendContactMessage: publicProcedure
    .input(z.object({ contactMessage: contactMessageSchema }))
    .mutation(async ({ input: { contactMessage } }) => {
      const { firstName, lastName, message } = contactMessage;

      const data = await resend.emails.send({
        from: "Max Next <onboarding@resend.dev>",
        to: [env.SEND_EMAIL],
        subject: `You have received a message from ${firstName} ${lastName}`,
        react: ContactEmailTemplate({ contactMessage, nodeEnv: env.NODE_ENV }),
      });

      return data;
    }),
});

export type AppRouter = typeof appRouter;
