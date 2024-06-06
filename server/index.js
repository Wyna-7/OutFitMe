'use strict';

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const { PORT } = require('./config');
const router = require('./router');

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
  await next();

  if (ctx.status === 404) {
    ctx.body = 'Sorry, this route does not exist!';
  }
});

app.use(async (ctx) => {
  ctx.body = 'This will eventually be an app.';
});

app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
