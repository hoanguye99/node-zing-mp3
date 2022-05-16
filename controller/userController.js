const bcrypt = require('bcrypt');
var assert = require('assert');
const saltRounds = 10;

const AccountUser = require('../models/AccountUser');

module.exports.handleRegister = (req, res, next) => {
  const {username, password} = req.body;
  try {
    assert(typeof username === "string" && typeof password === "string")
    bcrypt.hash(password, saltRounds, function(err, hash) {
      AccountUser.create({
        username: username,
        password: hash
      }, (err, user) => {
        if (err) {
          res.status(500).send({
            errorCode: "01",
            errorMessage: "Error saving new user in database"
          })
        }
        res.status(200).send({
          errorCode: "00",
          errorMessage: "Signup user successfully"
        })
      })
    });
  } catch(err) {
    res.status(400).send({
      errorCode: "02",
      errorMessage: "Error in signup request"
    })
  }
}

module.exports.handleLogin = (req, res, next) => {
  const {username, password} = req.body;
  try {
    assert(typeof username === "string" && typeof password === "string")
    AccountUser.findOne({username: username}, (err, account) => {
      if (account) {
        bcrypt.compare(password, account.password, function(err, result) {
          if(result) {
            res.status(200).send({
              errorCode: "00",
              errorMessage: "Login successfully"
            })
          } else {
            res.status(400).send({
              errorCode: "04",
              errorMessage: "Password does not match"
            })
          }
        });
      } else {
        res.status(400).send({
          errorCode: "03",
          errorMessage: "Username does not exist in the database"
        })
      }
    });
  } catch(err) {
    res.status(400).send({
      errorCode: "02",
      errorMessage: "Error in login request"
    })
  }
}