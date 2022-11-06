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

db.lead = require("./lead.model")(sequelize, Sequelize);
db.dealer = require("./dealer.model")(sequelize, Sequelize);
//db.user = require("./user")(sequelize, Sequelize);
db.post = require("./post.model")(sequelize, Sequelize);
db.vehicle = require("./vehicle.model")(sequelize, Sequelize);
db.accesory = require("./accesory.model")(sequelize, Sequelize);
db.post_vehicle = require("./post_vehicle.model")(sequelize, Sequelize);

//Relaciones
db.dealer.hasMany(db.lead);
db.lead.belongsTo(db.dealer);

db.dealer.hasMany(db.post);
db.post.belongsTo(db.dealer);

db.dealer.hasMany(db.vehicle);
db.vehicle.belongsTo(db.dealer);

db.dealer.hasMany(db.accesory);
db.accesory.belongsTo(db.dealer);

db.vehicle.hasMany(db.accesory);
db.accesory.belongsTo(db.vehicle);

db.vehicle.hasMany(db.post_vehicle);
db.post.hasMany(db.post_vehicle);
db.post_vehicle.belongsTo(db.post);
db.post_vehicle.belongsTo(db.vehicle);

db.lead.belongsTo(db.post);
db.post.hasMany(db.lead);

module.exports = db;
