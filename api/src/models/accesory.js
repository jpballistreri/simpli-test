module.exports = (sequelize, Sequelize) => {
  const Accessory = sequelize.define(
    "accesory",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        isEmail: true,
        allowNull: false,
      },
      tel: {
        type: Sequelize.INTEGER,
      },
      query: {
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

  Accessory.associate = (models) => {
    Accessory.belongsTo(models.dealer);
    Accessory.belongsTo(models.vehicle);
  };

  //Accessory.sync({ force: true });

  return Accessory;
};
