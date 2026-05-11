import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  MONGODB_URI: z.string().url(),
  CORS_ORIGIN: z.string().url().default('http://localhost:3000'),
  JWT_SECRET: z.string().min(8).optional(), // optional for now since it's just a landing
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  process.exit(1);
}

export const env = _env.data;
