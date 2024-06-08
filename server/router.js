'use strict';

const Router = require('@koa/router');
const router = new Router();
const image = require('./controllers/image');

//MVP routes
router.post('/upload', image.postImage);
router.get('/getRandomItem/:item/:tempToday/:rainToday', image.getRandomItem); //changed named in controller
// router.get('/getBottoms', image.getBottoms);
// router.get('/getShoes', image.getShoes);

//Not part of MVP -- if filtering done in client, I don't need these
// router.get('/getAllTop', image.getAllTop);
// router.get('/getAllBottom', image.getAllBottom);
// router.get('/getAllShoe', image.getAllShoe);

module.exports = router;
