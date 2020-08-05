"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Levels = void 0;

/** Logger优先级，优先级越高，消息也就被认为越重要，对应的整数便越小
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
**/
var Levels = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  HTTP: 'http',
  VERBOSE: 'verbose',
  DEBUG: 'debug',
  SILLY: 'silly'
};
exports.Levels = Levels;