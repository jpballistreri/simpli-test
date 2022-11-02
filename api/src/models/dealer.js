module.exports = (sequelize, Sequelize) => {
  const Dealer = sequelize.define(
    "dealer",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 32] },
      },
      street_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 32] },
      },
      street_number: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isNumeric: true, len: [1, 10] },
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 32] },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true, len: [1, 64] },
      },
      tel: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isNumeric: true, len: [1, 32] },
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
  Dealer.associate = (models) => {
    Dealer.hasMany(models.lead);
    Dealer.hasMany(models.publication);
    Dealer.hasMany(models.vehicle);
    Dealer.hasMany(models.accesory);
    Dealer.hasMany(models.publication);
  };

  //Dealer.sync({ force: true });

  return Dealer;
};
