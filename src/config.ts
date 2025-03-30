import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const config = {
  port: process.env.PORT || 3000,
  confluenceBaseUrl: process.env.CONFLUENCE_BASE_URL || '',
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN || '',
  headers: {
    Authorization: `Bearer ${process.env.PERSONAL_ACCESS_TOKEN}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Atlassian-Token': 'no-check',
    withCredentials: true,
  },
  env: process.env.NODE_ENV || 'development',
};

// Validate required configuration

if (!config.confluenceBaseUrl) {
  throw new Error('CONFLUENCE_BASE_URL environment variable is required');
}

if (!config.personalAccessToken) {
  throw new Error('PERSONAL_ACCESS_TOKEN environment variable is required');
}

export default config;
