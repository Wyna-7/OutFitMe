const mongoose = require('mongoose');
const { DB_NAME, DB_PORT } = require('../config');

mongoose
  .connect(`mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`🎃 Succesfully connected to ${DB_NAME} on port ${DB_PORT}!`);
  })
  .catch((error) => {
    console.log(`Something went wrong! ${error}`);
  });

module.exports = mongoose;
