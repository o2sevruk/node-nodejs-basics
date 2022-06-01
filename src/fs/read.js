import {access, constants} from 'fs';
import {readFile} from 'fs/promises';

export const read = async () => {
  const file = 'files/fileToRead.txt';

  await access(file, constants.F_OK, async (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    const fileText = await readFile(file, 'utf8');
    console.log(fileText);
  });
};

read();