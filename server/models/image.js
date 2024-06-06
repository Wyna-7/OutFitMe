'use strict';

const mongoose = require('./');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imgURL: {
    type: String,
    required: true,
  },
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
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
