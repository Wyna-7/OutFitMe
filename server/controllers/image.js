'use strict';

const image = require('../models/image');

exports.postImage = async (ctx) => {
  console.log(ctx.request.body);
  try {
    await image.create(ctx.request.body);
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, 'Something went wrong uploading the picture');
  }
};
//instead of repeating * 3, can I make the item value dynamic and pass it from the front too?
exports.getAllTops = async (ctx) => {
  //const { tempToday, rainToday } = ctx.request.body;
  try {
    const topArr = await image.find({
      item: 'top',
      tempRange: 'hot',
      rain: true,
    });
    const randomTop = topArr[Math.floor(Math.random() * topArr.length)];
    if (randomTop) {
      ctx.body = randomTop;
      ctx.status = 200;
    } else {
      ctx.throw(404, 'No appropiate clothing items were found');
    }
  } catch (error) {
    ctx.throw(500, 'Something went wrong getting the pictures');
  }
};
