'use strict';

const Router = require('@koa/router');
const router = new Router();
const image = require('./controllers/image');

router.post('/upload', image.postImage);
router.get('/getImage', image.getImage);

module.exports = router;
