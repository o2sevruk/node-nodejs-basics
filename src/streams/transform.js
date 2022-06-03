import {createInterface} from 'readline';
import {Transform} from 'stream';

export const transform = async () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, `${chunk.toString().split('').reverse().join('')}\n`);
    },
  });

  transformStream.pipe(process.stdout);
  rl.on('line', (data) => {
    transformStream.write(data);
  });
};

transform();