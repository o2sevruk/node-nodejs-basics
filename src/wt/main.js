import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {cpus} from 'os';
import {Worker} from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
  const cpuCores = cpus().length;
  const promises = [];

  for (let i = 0; i < cpuCores; i++) {
    const newPromise = async () => {
      return new Promise((res) => {
        const worker = new Worker(`${__dirname}/worker.js`, {workerData: 10 + i});
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