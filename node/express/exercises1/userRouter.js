const router = require('express').Router();

const {
  isValidUserName,
  isValidPassword,
  isValidEmail
} = require('./validations');

router.post(
  '/register',
  isValidUserName,
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(200).json({message: 'user created'})
);

router.post(
  '/login',
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(200).json({token : '86567349784e'})
);

module.exports = router;