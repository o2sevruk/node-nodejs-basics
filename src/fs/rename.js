import {access, constants} from 'fs';
import {rename as renameFile} from 'fs/promises';

export const rename = async () => {
  const invalidFile = 'files/wrongFilename.txt';
  const validFile = 'files/properFilename.md';

  await access(invalidFile, constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    renameFile(invalidFile, validFile);
    console.log('File was renamed!');
  });
};

rename();