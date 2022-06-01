import {access, constants} from 'fs';
import {writeFile} from 'fs/promises';

export const create = async () => {
  const newFile = 'files/fresh.txt';

  await access(newFile, constants.F_OK, (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    }

    writeFile(newFile, 'I am fresh and young');
    console.log('File was created!');
  });
};

create();