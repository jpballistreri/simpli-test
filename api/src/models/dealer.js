module.exports = (sequelize, Sequelize) => {
  const Dealer = sequelize.define(
    "dealer",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
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
