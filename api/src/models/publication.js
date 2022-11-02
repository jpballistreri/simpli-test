module.exports = (sequelize, Sequelize) => {
  const Publication = sequelize.define(
    "publication",
    {
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
  Publication.associate = (models) => {
    Publication.belongsTo(models.dealer);
  };
  //Publication.sync({ force: true });

  return Publication;
};
