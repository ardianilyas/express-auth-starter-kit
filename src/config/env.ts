import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("3000"),

  DATABASE_URL: z.string({
    error: "DATABASE_URL is required",
  }),

  BETTER_AUTH_SECRET: z.string({
    error: "BETTER_AUTH_SECRET is required",
  }),

  BETTER_AUTH_URL: z.string({
    error: "BETTER_AUTH_URL is required",
  }),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables:",
    parsedEnv.error.flatten().fieldErrors
  );

  process.exit(1);
}

export const env = parsedEnv.data;