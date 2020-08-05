/// <reference path="modules/winston/index.d.ts" />

declare module 'node-logger' {
  class SeeLogger {
    [x: string]: any;
    options: { [x: string]: any };
    transports: any[];
    constructor(arg: any);
  }
  export = SeeLogger;
}
