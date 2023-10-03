import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1),
    SEND_EMAIL: z.string().email(),
    SANITY_API_READ_TOKEN: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_SANITY_API_VERSION: z.string().default('2023-10-01'),
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
  },
  shared: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NODE_ENV: process.env.NODE_ENV,
  },
});
