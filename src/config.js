/* eslint no-process-env: 0 */
import dotenv from 'dotenv';

dotenv.config();

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  QUEUE_CONCURRENCY: parseInt(process.env.QUEUE_CONCURRENCY || "1"),
  REDIS_CONNECTION: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || "6379"),
  },
};

export default config;
