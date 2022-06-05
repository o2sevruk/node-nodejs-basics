import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {access, constants} from 'fs';
import {writeFile} from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  const newFile = `${__dirname}/files/fresh.txt`;

  await access(newFile, constants.F_OK, (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    }

    writeFile(newFile, 'I am fresh and young');
    console.log('File was created!');
  });
};

create();