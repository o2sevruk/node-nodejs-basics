import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {access, constants} from 'fs';
import {readdir} from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  const dir = `${__dirname}/files`;

  await access(dir, constants.F_OK, async (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    const files = await readdir(dir);
    console.log(files);
  });
};

list();