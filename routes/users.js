const express = require('express');
const router = express.Router();
const { users } = require("../models");
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { validateToken } = require('../middleware/authMiddleware');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10).then(hash => {
    users.create({
      username,
      password: hash
    });

    res.json('success')
  })
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await users.findOne({ where: {username} });

  if (!user) return res.json({ error: "User doesn't exist" });

  bcrypt.compare(password, user.password).then(match => {
    if (!match) {
      return res.json({ error: "Wrong password" });
    }

    sign({ username: user.username, id: user.id}, "importantsecret", (err, token) => {
      res.json(token)
    });
  })

});

module.exports = router;