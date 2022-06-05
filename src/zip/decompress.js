import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {createReadStream, createWriteStream} from 'fs';
import {createGunzip} from 'zlib';
import {pipeline} from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
  const fileSource = `${__dirname}/files/archive.gz`;
  const fileDestination = `${__dirname}/files/fileToCompress.txt`;

  const gunzip = createGunzip();
  const source = createReadStream(fileSource);
  const destination = createWriteStream(fileDestination);

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      throw new Error('Zlib operation failed');
    }
  });
};

decompress();