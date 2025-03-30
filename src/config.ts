import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const confluenceBaseUrl = process.env.CONFLUENCE_BASE_URL || '';
const personalAccessToken = process.env.PERSONAL_ACCESS_TOKEN || '';
const proxyUrl = process.env.PROXY_URL || 'http://localhost:33001/api';

const config = {
  port: process.env.PORT || 33000,
  confluenceBaseUrl,
  proxyUrl,
  headers: {
    Authorization: `Bearer ${personalAccessToken}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Atlassian-Token': 'no-check',
    withCredentials: 'true',
  },
  env: process.env.NODE_ENV || 'development',
  useProxy: process.env.USE_PROXY === 'true' || true,
};
console.log({ config });

if (!confluenceBaseUrl) {
  throw new Error('CONFLUENCE_BASE_URL environment variable is required');
}

if (!personalAccessToken) {
  throw new Error('PERSONAL_ACCESS_TOKEN environment variable is required');
}

export default config;
