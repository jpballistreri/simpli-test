module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "post",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "updated_at",
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );
  Post.associate = (models) => {
    Post.belongsTo(models.dealer);
    Post.hasMany(models.post_vehicle);
  };
  //Post.sync({ force: true });

  return Post;
};
