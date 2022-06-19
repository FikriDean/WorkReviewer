const express = require('express');
const router = express.Router();
const { posts } = require("../models");
const { validateToken } = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
  const listOfPosts = await posts.findAll()
  res.json(listOfPosts);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const post = await posts.findAll({
    where: {
      id
    }
  });
  res.json(post)
})

router.post('/', validateToken, async (req, res) => {
  const username = req.user.username;
  post.username = username;
  const post = req.body;
  await posts.create(post);
  res.json(post)
});



module.exports = router;