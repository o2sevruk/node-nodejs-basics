import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';
import {pipeline} from 'stream';

export const compress = async () => {
  const fileSource = 'files/fileToCompress.txt';
  const fileDestination = 'files/archive.gz';

  const gzip = createGzip();
  const source = createReadStream(fileSource);
  const destination = createWriteStream(fileDestination);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      throw new Error('Zlib operation failed');
    }
  });
};

compress();