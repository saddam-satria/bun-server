import writeLogger from 'services/writeLogger';
import { DEBUG } from 'utils/constant';

class Logger {
  public static log: Logger;
  write(fileName: string, message: string) {
    if (DEBUG) {
      console.log(message);
      return;
    }

    writeLogger(fileName, message);
    return;
  }
  static logger() {
    if (Logger.log) return Logger.log;

    const newLogger = new Logger();
    Logger.log = newLogger;
    return newLogger;
  }
}

export default Logger;
