module.exports = (sequalize, DataTypes) => {
  const posts = sequalize.define("posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  posts.associate = (models) => {
    posts.hasMany(models.comments, {
      onDelete: 'cascade'
    })
  }

  return posts;
}