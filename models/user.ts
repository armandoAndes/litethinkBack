import db from "../models/connection";
import { DataTypes } from "sequelize";
export interface User {
  name: string;
  role: string;
  password: string;
}
const UserEntity = db.define("user", {
  name: {
    type: DataTypes.STRING,
  },
  roleUser: {
    type: DataTypes.STRING,
  },
  password: {
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
});
export default UserEntity;
