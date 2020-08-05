import * as winston from 'winston';
import { defaultFormatter } from './formatter';

export default class FileTransport extends winston.transports.File {
  constructor(options: any) {
    options.datePattern = 'YYYY-MM-DD';
    options.zippedArchive = true;
    options.maxSize = '100m';
    options.maxFiles = '30d';

    options.format = winston.format.combine(
      defaultFormatter,
      winston.format.printf(options.formatter),
    );

    if (options.json) {
      options.format = winston.format.combine(
        defaultFormatter,
        winston.format.json(options.formatter),
      );
    }
    super(options);
  }
}
