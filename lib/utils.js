"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = assign;
exports.concatLog = concatLog;
exports.getFullDate = getFullDate;

var util = _interopRequireWildcard(require("util"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Object.assign()方法 null和undefined作为源对象中的属性值，不会被忽略
 * @export
 * @param {{ [x: string]: any }} target
 * @param {...any[]} sources
 * @returns {{
 *   [x: string]: any;
 * }}
 */
function assign(target) {
  if (!target) {
    return {};
  } // tslint:disable-next-line: prefer-for-of


  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    var source = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    if (!source) {
      continue;
    }

    var keys = Object.keys(source); // tslint:disable-next-line: prefer-for-of

    for (var j = 0; j < keys.length; j++) {
      var key = keys[j];

      if (source[key] !== undefined && source[key] !== null) {
        target[key] = source[key];
      }
    }
  }

  return target;
}
/**
 * Error转换
 * @export
 * @param {...any[]} args
 * @returns {string}
 */


function concatLog() {
  var errStack = [''];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var msg = args.map(function (arg) {
    if (arg instanceof Error) {
      (arg === null || arg === void 0 ? void 0 : arg.stack) && errStack.push(arg.stack);
      return "".concat(arg.name, ": ").concat(arg.message);
    }

    if (util.isObject(arg)) {
      return JSON.stringify(arg);
    }

    return arg;
  }).join(' ');
  return "".concat(msg).concat(errStack.join('\n'));
}
/**
 * 返回字符串时间格式：2020-08-03
 * @export
 * @returns {string}
 */


function getFullDate() {
  // 获取当前日期
  var date = new Date(); // 获取当前月份

  var nowMonth = date.getMonth() + 1; // 获取当前是几号

  var strDate = date.getDate(); // 添加分隔符“-”

  var seperator = '-'; // 对月份进行处理，1-9月在前面添加一个“0”

  if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = '0' + nowMonth;
  } // 对月份进行处理，1-9号在前面添加一个“0”


  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  } // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期


  return date.getFullYear() + seperator + nowMonth + seperator + strDate;
}