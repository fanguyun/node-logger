const Koa = require('Koa');
const SeeLogger = require('./index');

const app = new Koa();

const logger = new SeeLogger({
  name: 'xdp-webapp',
  filePath: './logs',
  module: 'server',
});
// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response
app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('listening on port 3000');
  logger.info('listening on port 3000');
  logger.http('list');
  logger.error(new Error('123'));
});
