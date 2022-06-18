const express = require('express');
const router = express.Router();
const { comments } = require("../models");
const { validateToken } = require('../middleware/authMiddleware')

router.get('/:postId', async (req, res) => {
  const postId = req.params.postId;
  const allComment = await comments.findAll({
    where: {
      postId
    }
  });
  res.json(allComment)
});

router.post('/:postId', validateToken,  async (req, res) => {
  const comment = req.body;
  const username = req.user.username;
  comment.username = username;
  await comments.create(comment);
  res.json(comment)
});

module.exports = router;