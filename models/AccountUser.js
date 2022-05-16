const mongoose = require('mongoose');

const AccountUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username cannot be blank']
  },
  password: {
    type: String,
    required: [true, 'Password cannot be blank']
  },
});

const AccountUser = mongoose.model('AccountUser', AccountUserSchema);
module.exports = AccountUser;