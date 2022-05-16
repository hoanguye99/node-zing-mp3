const express = require('express');
const app = express();

require('dotenv').config();


app.get('/', (req, res, next) => {
  res.send('Hello World!');
});


const lisPort = process.env.PORT || 3033;
app.listen(lisPort, () => {
  console.log(`Server is listening on port ${lisPort}`);
});

