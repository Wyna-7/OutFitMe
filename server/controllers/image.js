'use strict';

const image = require('../models/image');

//This method waits in client for cloudinary to send the imURL, then saves the image to the database
exports.postImage = async (ctx) => {
  console.log(ctx.request.body);
  try {
    await image.create(ctx.request.body);
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, 'Something went wrong uploading the picture');
  }
};
//Make the item value dynamic and pass it from the front too
//uses params to dynamically return ONE image that meets the criteria for the day
exports.getRandomItem = async (ctx) => {
  const { item, tempToday, rainToday } = ctx.params;
  try {
    const randomTop = await image.findOne({
      item: item,
      tempRange: tempToday,
      rain: rainToday,
    });

    if (randomTop) {
      ctx.body = randomTop;
      ctx.status = 200;
      return;
    } else {
      ctx.throw(404, 'No appropiate clothing items were found');
    }
  } catch (error) {
    ctx.throw(500, 'Something went wrong getting the pictures');
  }
};
