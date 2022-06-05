import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {access, constants} from 'fs';
import {readFile} from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const file = `${__dirname}/files/fileToRead.txt`;

  await access(file, constants.F_OK, async (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    const fileText = await readFile(file, 'utf8');
    console.log(fileText);
  });
};

read();