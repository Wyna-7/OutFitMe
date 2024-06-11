'use strict';

const Image = require('../models/image');

//This method waits in client for cloudinary to send the imURL, then saves the image to the database
exports.postImage = async (ctx) => {
  console.log(ctx.request.body);
  try {
    await Image.create(ctx.request.body);
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, 'Something went wrong uploading the picture');
  }
};

//uses params to dynamically return ONE image that meets the criteria for the day's weather
exports.getRandomItem = async (ctx) => {
  const { item, tempToday, rainToday } = ctx.params;
  try {
    const allItems = await Image.find({
      item: item,
      tempRange: tempToday,
      rain: rainToday,
    });

    const randomItem = allItems[Math.floor(Math.random() * allItems.length)];

    if (randomItem) {
      ctx.body = randomItem;
      ctx.status = 200;
      return;
    } else {
      ctx.throw(404, 'No appropiate clothing items were found');
    }
  } catch (error) {
    ctx.throw(500, 'Something went wrong getting the pictures');
  }
};

exports.getAllItems = async (ctx) => {
  const { item } = ctx.params;
  try {
    const allItems = await Image.find({
      item: item,
    });

    if (allItems) {
      ctx.body = allItems;
      ctx.status = 200;
      return;
    } else {
      ctx.throw(404, 'No clothing items found for this category');
    }
  } catch (error) {
    ctx.throw(
      500,
      'Something went wrong getting the clothing items for this category'
    );
  }
};
