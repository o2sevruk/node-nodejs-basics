import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {spawn} from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
  const child = spawn('node', [`${__dirname}/files/script.js`, ...args]);

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });
};

spawnChildProcess(['test1', 'test2']);