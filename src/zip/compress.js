import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';
import {pipeline} from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  const fileSource = `${__dirname}/files/fileToCompress.txt`;
  const fileDestination = `${__dirname}/files/archive.gz`;

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