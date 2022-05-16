const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/next-zing-mp3';
mongoose.connect(connectionString, { useNewUrlParser: true }, (err) => {
  if (err) console.error(err);
  console.log('Connected to database: next-zing-mp3');
});

module.exports.connectionString = connectionString;
