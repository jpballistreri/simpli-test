module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      user_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
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
  User.sync({ alter: false });

  return User;
};
