import {createReadStream} from 'fs';

export const read = async () => {
  const file = 'files/fileToRead.txt';
  const readableStream = createReadStream(file, 'utf8');

  readableStream.pipe(process.stdout);
};

read();