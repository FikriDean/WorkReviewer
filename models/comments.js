module.exports = (sequalize, DataTypes) => {
  const comments = sequalize.define("comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return comments
}