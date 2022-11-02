module.exports = (sequelize, Sequelize) => {
  const Accessory = sequelize.define(
    "accesory",
    {
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
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

  Accessory.associate = (models) => {
    Accessory.belongsTo(models.dealer);
    Accessory.belongsTo(models.vehicle);
  };

  //Accessory.sync({ force: true });

  return Accessory;
};
