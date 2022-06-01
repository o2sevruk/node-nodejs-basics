import {access, constants} from 'fs';
import {rm} from 'fs/promises';

export const remove = async () => {
  const file = 'files/fileToRemove.txt';

  await access(file, constants.F_OK, async (isExist) => {
    if (isExist) {
      throw new Error('FS operation failed');
    }

    await rm(file);
    console.log('File was deleted!');
  });
};

remove();