const Queue = require('bull');
const { processJob } = require('./worker');

const workflowQueue = new Queue('workflowQueue', process.env.REDIS_URL);
workflowQueue.process(processJob);

console.log('🌀 BullMQ Queue initialized');

module.exports = workflowQueue;
