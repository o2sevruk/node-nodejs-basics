import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {access, constants} from 'fs';
import {rm} from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  const file = `${__dirname}/files/fileToRemove.txt`;

  await access(file, constants.F_OK, async (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    await rm(file);
    console.log('File was deleted!');
  });
};

remove();