module.exports = (sequelize, Sequelize) => {
  const Post_vehicle = sequelize.define(
    "post_vehicle",
    {
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
  Post_vehicle.associate = (models) => {
    Post_vehicle.belongsTo(models.publication);
    Post_vehicle.belongsTo(models.vehicle);
  };
  //Post_vehicle.sync({ force: true });

  return Post_vehicle;
};
