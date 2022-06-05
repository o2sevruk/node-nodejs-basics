import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {access, constants} from 'fs';
import {rename as renameFile} from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  const invalidFile = `${__dirname}/files/wrongFilename.txt`;
  const validFile = `${__dirname}/files/properFilename.md`;

  await access(invalidFile, constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    renameFile(invalidFile, validFile);
    console.log('File was renamed!');
  });
};

rename();