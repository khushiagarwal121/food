import { Sequelize, DataTypes } from "sequelize";
// import DeliveryPartnerDocuments from "./delivery_partner_document.js";
import RestaurantDocuments from "./restaurant_document.js";
// import DeliveryPartners from "./delivery_partner.js";

// connect to local database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.RestaurantDocuments = RestaurantDocuments(sequelize, DataTypes);
// db.DeliveryPartnerDocuments = DeliveryPartnerDocuments(sequelize, DataTypes);
// db.DeliveryPartners = DeliveryPartners(sequelize, DataTypes);

// //relationship between user and role
// db.Role.belongsToMany(db.User, {
//   through: db.UserRole,
//   foreignKey: "role_uuid",
//   otherkey: "user_uuid",
// });
// db.User.belongsToMany(db.Role, {
//   through: db.UserRole,
//   foreignKey: "user_uuid",
//   otherkey: "role_uuid",
// });

// //relationship between refresh token and user
// db.RefreshToken.belongsTo(db.User, {
//   foreignKey: "user_uuid",
// });

// db.RefreshToken.belongsTo(db.User, {
//   foreignKey: "created_by",
//   as: "creator",
// });

// db.RefreshToken.belongsTo(db.User, {
//   foreignKey: "updated_by",
//   as: "updater",
// });

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default { db, connectDB };
