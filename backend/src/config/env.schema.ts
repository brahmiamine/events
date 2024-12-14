import { z } from 'zod';

export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    DATABASE_HOST: z.string(),
    DATABASE_PORT: z.string().regex(/^\d+$/).transform(Number), // Transforme en entier
    DATABASE_USER: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE_NAME: z.string(),
});

export type EnvVars = z.infer<typeof envSchema>;
