module.exports = (sequelize, Sequelize) => {
  const Publication_vehicle = sequelize.define(
    "publication_vehicle",
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
  Publication_vehicle.associate = (models) => {
    Publication_vehicle.belongsTo(models.publication);
    Publication_vehicle.belongsTo(models.vehicle);
  };
  //Publication_vehicle.sync({ force: true });

  return Publication_vehicle;
};
