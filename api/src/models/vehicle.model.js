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
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { len: [1, 4] },
      },
      type_gear_box: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 32] },
      },
      motor: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 32] },
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [1, 32] },
      },
      doors: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { len: [1, 2] },
      },
      pic_url: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: { len: [1, 128] },
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
    Vehicle.hasMany(models.post_vehicle);
  };
  //Vehicle.sync({ alter: true });

  return Vehicle;
};
