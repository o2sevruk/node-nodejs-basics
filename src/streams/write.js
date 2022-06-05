import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {createInterface} from 'readline';
import {createWriteStream} from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  const file = `${__dirname}/files/fileToWrite.txt`;
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  const writableStream = createWriteStream(file);

  rl.on('line', (data) => {
    writableStream.write(`${data}\n`);
  });
};

write();