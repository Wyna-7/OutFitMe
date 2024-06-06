'use strict';

const image = require('../models/image');

exports.postImage = async (ctx) => {
  const { imgURL } = ctx.request.body;
  try {
    const newImage = image.create({ imgURL });
    await newImage.save;
    ctx.body = newImage.imgURL;
  } catch (err) {
    ctx.throw(500, 'Something went wrong uploading the picture');
  }
};

exports.getImage = async (ctx) => {
  try {
    const getImage = await image.findOne().sort({ _id: -1 });
    if (getImage) {
      ctx.body = getImage.imgURL;
    } else {
      ctx.throw(404, 'Image was not found');
    }
  } catch (error) {
    ctx.throw(500, 'Something went wrong getting the picture');
  }
};
