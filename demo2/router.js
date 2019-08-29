const Router = require('koa-router');

const router = new Router();

router.get('/hello', async (ctx, next) => {
    console.log(`[req] /hello`);
    ctx.body = { message: 'Who are you?'};
    await next();
});

module.exports = router;
