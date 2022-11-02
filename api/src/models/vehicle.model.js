module.exports = (sequelize, Sequelize) => {
  const Vehicle = sequelize.define(
    "vehicle",
    {
      model: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 32] },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 32] },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 256] },
      },
      gear_box: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 16] },
      },
      dealer_id: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isNumeric: true, len: [1, 10] },
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
