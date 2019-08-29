const Router = require('koa-router');
const request = require('request-promise-native');

const router = new Router();

router.get('/hello', async (ctx, next) => {
    console.log(`[req] /hello`);
    const options = {
        method: 'GET',
        uri: `${process.env.SH_DEMO2_URL}/hello`,
        json: true,
    };
    const result = await request(options);
    ctx.body = result;
    await next();
});

module.exports = router;
