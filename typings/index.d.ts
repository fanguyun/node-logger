/// <reference path="modules/winston/index.d.ts" />

declare module 'node-log-info' {
  class Logger {
    [x: string]: any;
    options: { [x: string]: any };
    transports: any[];
    constructor(arg: any);
  }
  export = Logger;
}
