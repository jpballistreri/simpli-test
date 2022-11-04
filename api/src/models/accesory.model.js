module.exports = (sequelize, Sequelize) => {
  const Accessory = sequelize.define(
    "accesory",
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
      dealer_id: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isNumeric: true, len: [1, 10] },
      },
      vehicle_id: {
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

  Accessory.associate = (models) => {
    Accessory.belongsTo(models.dealer);
    Accessory.belongsTo(models.vehicle);
  };

  //Accessory.sync({ force: true });

  return Accessory;
};
