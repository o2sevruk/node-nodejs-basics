import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {createReadStream} from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const file = `${__dirname}/files/fileToRead.txt`;
  const readableStream = createReadStream(file, 'utf8');

  readableStream.pipe(process.stdout);
};

read();