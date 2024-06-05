const Koa = require('koa');
const app = new Koa();
const { PORT } = require('./config');

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
