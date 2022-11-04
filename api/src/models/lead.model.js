module.exports = (sequelize, Sequelize) => {
  const Lead = sequelize.define(
    "lead",
    {
      first_name: {
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

  Lead.associate = (models) => {
    Lead.belongsTo(models.dealer);
  };

  //Lead.sync({ force: true });

  return Lead;
};
