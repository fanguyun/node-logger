import * as winston from 'winston';
import { hostname } from 'os';

export const defaultFormatter = winston.format.combine(
  winston.format((info: { hostname: string; pid: number; level: string }) => {
    info.hostname = hostname();
    info.pid = process.pid;
    info.level = info.level.toUpperCase();
    return info;
  })(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss,SSSS' }),
  winston.format.ms(),
);
