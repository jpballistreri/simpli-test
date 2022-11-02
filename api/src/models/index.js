const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const { DB } = require("../config/db.config");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.lead = require("./lead")(sequelize, Sequelize);
db.dealer = require("./dealer.model")(sequelize, Sequelize);
//db.user = require("./user")(sequelize, Sequelize);
db.publication = require("./publication")(sequelize, Sequelize);
db.vehicle = require("./vehicle.model")(sequelize, Sequelize);
db.accesory = require("./accesory")(sequelize, Sequelize);
db.publication_vehicle = require("./publication_vehicle")(sequelize, Sequelize);

//Relaciones
db.dealer.hasMany(db.lead);
db.lead.belongsTo(db.dealer);

db.dealer.hasMany(db.publication);
db.publication.belongsTo(db.dealer);

db.dealer.hasMany(db.vehicle);
db.vehicle.belongsTo(db.dealer);

db.dealer.hasMany(db.accesory);
db.accesory.belongsTo(db.dealer);

db.vehicle.hasMany(db.accesory);
db.accesory.belongsTo(db.vehicle);

db.publication_vehicle.belongsTo(db.publication);
db.publication_vehicle.belongsTo(db.vehicle);

module.exports = db;
