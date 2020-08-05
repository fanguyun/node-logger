import { join } from 'path';
import { Levels } from './level';
import ConsoleTransport from './transport/console';
import FileTransport from './transport/file';
import { assign, getFullDate, concatLog } from './utils';
import * as winston from 'winston';

export default class Logger extends Map {
  [x: string]: any;
  options: { [x: string]: any };
  transports: (ConsoleTransport | FileTransport)[] | undefined;

  constructor(options: any) {
    super();
    this.options = assign(this.defaultOptions(), options);
    this.initTransport();
  }

  initTransport() {
    const {
      name,
      consoleLevel,
      consoleFormatter,
      filePath,
      formatter,
      json,
      isFile,
    } = this.options;

    const consoleTransport = new ConsoleTransport({
      level: consoleLevel,
      name,
      formatter: consoleFormatter,
    });

    const sillyTransport = new FileTransport({
      level: Levels.SILLY,
      name,
      filename: join(filePath, `${name}/${getFullDate()}.log`),
      formatter,
      json,
    });

    this.transports = isFile
      ? [consoleTransport, sillyTransport]
      : [consoleTransport];
    this.set(name);
    Object.keys(Levels).forEach((key: string) => {
      this[Levels[key]] = (...args: any) => {
        return this.get(name)[Levels[key]](concatLog(...args));
      };
    });
  }

  set(name: string) {
    if (super.has(name)) {
      return super.get(name);
    }
    const logger = winston.createLogger({
      transports: this.transports as any,
      defaultMeta: { name, module: this.options.module },
    });
    super.set(name, logger);
    return logger;
  }

  defaultOptions() {
    const formatter = (meta: {
      timestamp: any; // 收到信息的时间戳
      level: any; // 日志级别
      hostname: any; // 主机名
      pid: any; // 进程ID
      ms: any; // 自上一条日志消息以来的毫秒数
      name: any; // 应用名称
      module: string; // 模块名称
      message: any; // 日志消息
    }) => {
      return `${meta.timestamp} ${meta.level} ${meta.hostname} ${meta.pid} (${
        meta.ms
      }) [${meta.name}] ${meta.module ? '*' + meta.module + '*' : ''} ${
        meta.message
      }`;
    };
    return {
      name: 'app',
      filePath: './logs',
      formatter,
      consoleFormatter: formatter,
      consoleLevel: 'silly',
      json: false,
      isFile: true,
    };
  }
}
