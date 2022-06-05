import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {createHash} from 'crypto';
import {access, constants} from 'fs';
import {readFile} from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  const file = `${__dirname}/files/fileToCalculateHashFor.txt`;

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