import {cpus} from 'os';
import {Worker} from 'worker_threads';

export const performCalculations = async () => {
  const cpuCores = cpus().length;
  const promises = [];

  for (let i = 0; i < cpuCores; i++) {
    const newPromise = async () => {
      return new Promise((res) => {
        const worker = new Worker('./worker.js', {workerData: 10 + i});
        worker.on('message', (msg) => {
          res({
            status: 'resolved',
            data: msg,
          });
        });
        worker.on('error', () => {
          res({
            status: 'error',
            data: null,
          });
        });
      }).then(data => console.log(data));
    };
    promises.push(newPromise);
  }

  for(const promise of promises) {
    await promise();
  }
};

performCalculations();