import { Queue, QueueEvents, Worker } from 'bullmq';
import IORedis from 'ioredis';

import { worker } from './queue.worker';
import config from './config';

const _queue = new Queue('simple-queue', { connection: new IORedis(config.REDIS_CONNECTION) });
const queueEvents = new QueueEvents('simple-queue', { connection: new IORedis(config.REDIS_CONNECTION) });

const addToQueue = async (data) => {
  console.log('addToQueue', data);
  _queue.add('data', data);
}

queueEvents.on('completed', ({ jobId }) => {
    console.log('completed', jobId);
});

queueEvents.on('failed', ({ jobId, failedReason }) => {
    console.error('error queue', failedReason);
});

export {
  addToQueue
}