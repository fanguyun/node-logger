<h2>node-log-info 👋</h2>
<p>
  <img src="http://img.shields.io/badge/version-1.1.1-blue.svg?cacheSeconds=2592000" />
</p>

> 基于 winston 的 node 日志服务

#### Develop

```sh
# install
yarn

# dev
yarn dev

# test
yarn test

# lint
yarn lint

# changelog
yarn log
```

#### Installation

```
npm install node-log
```

#### Usage

```js
# Example
import Logger from 'node-log-info';
const logger = new Logger({
  name: 'app';
  filePath:'./logs';
});
logger.info('foo');
logger.error(new Error('error 1'))


# Logger [options]
Options:
  name                 # 应用名称, default: 'app'
  filePath             # 日志输出目录, default: '/logs'
  consoleLevel         # console日志级别, default: 'silly',输出所有级别日志
  consoleFormatter     # console日志格式, default:
  formatter            # 文件日志格式, default:
  json                 # 是否json格式, default: false
  isFile               # 是否开启文件日志, default: true


# Logger优先级，优先级越高，消息也就被认为越重要，对应的整数便越小：
  Leves = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  }
```
