require('dotenv/config');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');


const SERVER_PORT = process.env.PORT || 3112;

const app = new Koa();

app.on('error', err => {
    console.log(err);
});
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(SERVER_PORT);
console.log(`Server running on port ${SERVER_PORT}`);
