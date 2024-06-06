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

exports.getImage = async (ctx) => {
  try {
    const getImage = await image.findOne().sort({ _id: -1 });
    if (getImage) {
      ctx.body = getImage;
    } else {
      ctx.throw(404, 'Image was not found');
    }
  } catch (error) {
    ctx.throw(500, 'Something went wrong getting the picture');
  }
};
