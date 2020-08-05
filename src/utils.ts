import * as util from 'util';

/**
 * Object.assign()方法 null和undefined作为源对象中的属性值，不会被忽略
 * @export
 * @param {{ [x: string]: any }} target
 * @param {...any[]} sources
 * @returns {{
 *   [x: string]: any;
 * }}
 */
export function assign(
  target: { [x: string]: any },
  ...sources: any[]
): {
  [x: string]: any;
} {
  if (!target) {
    return {};
  }
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    if (!source) {
      continue;
    }
    const keys: string[] = Object.keys(source);
    // tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < keys.length; j++) {
      const key: string = keys[j];
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
export function concatLog(...args: any[]): string {
  const errStack: string[] = [''];
  const msg: string = args
    .map((arg: any) => {
      if (arg instanceof Error) {
        arg?.stack && errStack.push(arg.stack);
        return `${arg.name}: ${arg.message}`;
      }
      if (util.isObject(arg)) {
        return JSON.stringify(arg);
      }
      return arg;
    })
    .join(' ');
  return `${msg}${errStack.join('\n')}`;
}

/**
 * 返回字符串时间格式：2020-08-03
 * @export
 * @returns {string}
 */
export function getFullDate(): string {
  // 获取当前日期
  const date = new Date();
  // 获取当前月份
  let nowMonth: number | string = date.getMonth() + 1;
  // 获取当前是几号
  let strDate: number | string = date.getDate();
  // 添加分隔符“-”
  const seperator = '-';

  // 对月份进行处理，1-9月在前面添加一个“0”
  if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = '0' + nowMonth;
  }

  // 对月份进行处理，1-9号在前面添加一个“0”
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }

  // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
  return date.getFullYear() + seperator + nowMonth + seperator + strDate;
}
