import * as winston from 'winston';
import { defaultFormatter } from './formatter';

export default class ConsoleTransport extends winston.transports.Console {
  format: any;
  constructor(options: winston.ConsoleTransportOptions | undefined) {
    super(options);

    this.format = winston.format.combine(
      defaultFormatter,
      winston.format.colorize(),
      winston.format.printf(options?.formatter),
    );
  }
}
