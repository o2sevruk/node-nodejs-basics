import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {access, constants} from 'fs';
import {mkdir, readdir, copyFile} from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  const baseDir = `${__dirname}/files`;
  const targetDir = `${__dirname}/files_copy`;

  await access(targetDir, constants.F_OK, async (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    }

    const files = await readdir(baseDir);

    // Create folder if not exist
    await mkdir(targetDir);
    console.log('Folder was created!');

    // Copy files
    for (const file of files) {
      await copyFile(`${baseDir}/${file}`, `${targetDir}/${file}`);
    }
    console.log('Files were copied!');
  });
};

copy();