import { Worker } from 'bullmq';
import IORedis from 'ioredis';

import config from './config';

const worker = new Worker('simple-queue', async job => {
  // do something with job.data
  console.log('worker', job.data);
}, { connection: new IORedis(config.REDIS_CONNECTION)});

export {
  worker
}