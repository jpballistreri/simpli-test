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
        allowNull: false,
      },
      query: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 256] },
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
    Lead.belongsTo(models.post);
  };

  //Lead.sync({ force: true });

  return Lead;
};
