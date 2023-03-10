import { Sequelize } from "sequelize";

const db = new Sequelize("liteth", "root", "moar2314", {
  host: "34.136.39.237",
  dialect: "mysql",
});

export default db;
