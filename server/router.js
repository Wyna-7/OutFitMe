'use strict';

const Router = require('@koa/router');
const router = new Router();
const image = require('./controllers/image');

//MVP routes
router.post('/upload', image.postImage);
router.get('/getRandomItem/:item/:tempToday/:rainToday', image.getRandomItem);

module.exports = router;
