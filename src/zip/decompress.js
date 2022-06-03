import {createReadStream, createWriteStream} from 'fs';
import {createGunzip} from 'zlib';
import {pipeline} from 'stream';

export const decompress = async () => {
  const fileSource = 'files/archive.gz';
  const fileDestination = 'files/fileToCompress.txt';

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