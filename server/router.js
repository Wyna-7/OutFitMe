'use strict';

const Router = require('@koa/router');
const router = new Router();
const image = require('./controllers/image');

//MVP routes
router.post('/upload', image.postImage);
// router.get('/getRandomTop', image.getRandomTop);
// router.get('/getRandomBottom', image.getRandomBottom);
// router.get('/getRandomShoe', image.getRandomShoe);

//Not part of MVP
// router.get('/getAllTop', image.getAllTop);
// router.get('/getAllBottom', image.getAllBottom);
// router.get('/getAllShoe', image.getAllShoe);

module.exports = router;
