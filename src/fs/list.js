import {access, constants} from 'fs';
import {readdir} from 'fs/promises';

export const list = async () => {
  const dir = 'files';

  await access(dir, constants.F_OK, async (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    const files = await readdir(dir);
    console.log(files);
  });
};

list();