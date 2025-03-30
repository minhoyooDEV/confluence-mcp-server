import { z } from 'zod';

// Environment variables schema
export const EnvSchema = z.object({
  CONFLUENCE_BASE_URL: z.string().url(),
  CONFLUENCE_API_TOKEN: z.string().min(1),
  CONFLUENCE_EMAIL: z.string().email(),
});

// Parse environment variables
export function getConfig() {
  const config = {
    CONFLUENCE_BASE_URL: process.env.CONFLUENCE_BASE_URL,
    CONFLUENCE_API_TOKEN: process.env.CONFLUENCE_API_TOKEN,
    CONFLUENCE_EMAIL: process.env.CONFLUENCE_EMAIL,
  };

  try {
    return EnvSchema.parse(config);
  } catch (error) {
    console.error('Invalid configuration:', error);
    throw new Error('Invalid server configuration. Please check your environment variables.');
  }
}

export type Config = z.infer<typeof EnvSchema>;
