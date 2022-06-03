import {createReadStream} from 'fs';

export const read = async () => {
  const file = 'files/fileToRead.txt';
  const stream = await createReadStream(file);

  stream.pipe(process.stdout);
};

read();