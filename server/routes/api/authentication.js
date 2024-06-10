const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authentication.js');

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/some-protected-route', authController.protect, (req, res) => {
  res.json({ message: 'You accessed a protected route!' });
});

module.exports = router;
