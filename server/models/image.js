'use strict';

const mongoose = require('./');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  tempRange: {
    type: String,
    required: true,
  },
  rain: {
    type: Boolean,
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
    required: true,
  },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
