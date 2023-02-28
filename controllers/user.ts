import { Request, Response } from "express";

const connection = require("./../models/connection");

export const login = (req: Request, res: Response) => {
  console.log(
    "REQ",
    `SELECT * FROM user WHERE name = '${req.body.body.name}' AND password = '${req.body.body.password}'`
  );
  connection.connection.query(
    "SELECT * FROM `user` WHERE name = '" +
      req.body.body.name +
      "' AND  password ='" +
      req.body.body.password +
      "'" +
      " ;",
    (err: any, results: any) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send("Error querying database.");
      }
      return res.status(200).send(results);
    }
  );
};
