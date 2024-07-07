import { existsSync, mkdirSync, appendFile } from 'fs';
import { join } from 'path';
import { BASE_FILE } from 'utils/constant';

const writeLogger = (fileName: string, message: string) => {
  const loggerPath = join(BASE_FILE, 'logs');
  const isLogFolderExist = existsSync(loggerPath);
  if (!isLogFolderExist) {
    mkdirSync(loggerPath, { recursive: true });
  }

  appendFile(join(loggerPath, fileName), `${message}\n`, (err) => {
    if (err) {
      throw new Error(err.message);
    }
  });
};

export default writeLogger;
