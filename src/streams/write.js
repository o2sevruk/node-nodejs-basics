import {createInterface} from 'readline';
import {createWriteStream} from 'fs';

export const write = async () => {
  const file = 'files/fileToWrite.txt';
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