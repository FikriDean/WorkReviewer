const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models')

// Routers
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const usersRouter = require('./routes/users');
app.use("/posts", postsRouter);
app.use('/comments', commentsRouter);
app.use('/auth', usersRouter);

const port = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log('Server is running on port 3001');
  })
})
// check