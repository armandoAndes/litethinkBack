import db from "../models/connection";
import { DataTypes } from "sequelize";
export interface Item {
  name: string;
  enterprise: string;
  id?: number;
}
const ItemEntity = db.define(
  "item",
  {
    name: {
      type: DataTypes.STRING,
    },
    enterprise: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
export default ItemEntity;
