const mongoose = require('./index.js');

const imageSchema = mongoose.Schema({
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
