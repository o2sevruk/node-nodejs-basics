import {access, constants} from 'fs';
import {mkdir, readdir, copyFile} from 'fs/promises';

export const copy = async () => {
  const baseDir = 'files';
  const targetDir = 'files_copy';

  await access(targetDir, constants.F_OK, async (isExist) => {
    if (!isExist) {
      throw new Error('FS operation failed');
    }

    try {
      const files = await readdir(baseDir);

      // Create folder if not exist
      await mkdir(targetDir);
      console.log('Folder was created!');

      // Copy files
      for (const file of files) {
        await copyFile(`${baseDir}/${file}`, `${targetDir}/${file}`);
      }
      console.log('Files were copied!');
    } catch (err) {
      throw new Error(err);
    }
  });
};

copy();