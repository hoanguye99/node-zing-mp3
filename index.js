const {connectionString} = require('./config/db.config');
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var multer = require('multer');
var forms = multer();
const userRoutes = require('./routes/userRoutes');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(forms.array());


app.get('/', (req, res, next) => {
  res.send('Hello World!');
});


app.use('/user', userRoutes);

const lisPort = process.env.PORT || 3033;
app.listen(lisPort, () => {
  console.log(`Server is listening on port ${lisPort}`);
});

