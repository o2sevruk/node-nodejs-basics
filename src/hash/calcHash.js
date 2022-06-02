import {createHash} from 'crypto';
import {access, constants} from 'fs';
import {readFile} from 'fs/promises';

export const calculateHash = async () => {
  const file = 'files/fileToCalculateHashFor.txt';

  await access(file, constants.F_OK, async (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    const textFromFile = await readFile(file, 'utf8');
    const hash = createHash('sha256').update(textFromFile).digest('hex');

    console.log(hash);
  });
};

calculateHash();