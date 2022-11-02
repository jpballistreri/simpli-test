module.exports = (sequelize, Sequelize) => {
  const Vehicle = sequelize.define(
    "vehicle",
    {
      model: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      gear_box: {
        type: Sequelize.STRING,
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

  Vehicle.associate = (models) => {
    Vehicle.belongsTo(models.dealer);
    Vehicle.hasMany(models.accesory);
  };
  //Vehicle.sync({ force: true });

  return Vehicle;
};
