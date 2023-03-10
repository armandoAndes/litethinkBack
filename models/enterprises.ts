import { DataTypes } from "sequelize";
import db from "../models/connection";
export interface Enterprises {
  name: string;
  address: string;
  nit: string;
  phone: string;
  id: number;
}
const EnterprisesEntity = db.define(
  "enterprises",
  {
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nit: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
export default EnterprisesEntity;
