import { Enterprises } from "../models/enterprises";

import { Request, Response } from "express";

const connection = require("./../models/connection");
export const getEnterprises = (req: Request, res: Response) => {
  connection.connection.query(
    "SELECT * FROM enterprises",
    (err: any, results: any) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send("Error querying database.");
      }
      return res.status(200).send(results);
    }
  );
};
export const createEnterprises = (req: Request, res: Response) => {
  const enterprise: Enterprises = req.body.data;
  connection.connection.query(
    `INSERT INTO enterprises (name,nit,phone,address) VALUES ('${enterprise.name}','${enterprise.nit}','${enterprise.phone}','${enterprise.address}');`,
    (err: any, results: any) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send("Error querying database.");
      }
      return res.status(200).send(results);
    }
  );
};
export const deleteEnterprises = (req: Request, res: Response) => {
  connection.connection.query(
    `DELETE FROM enterprises WHERE id='${req.body.id}'`,
    (err: any, results: any) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send("Error querying database.");
      }
      return res.status(200).send(results);
    }
  );
};
export const updateEnterprises = (req: Request, res: Response) => {
  const enterprise: Enterprises = req.body.body;
  connection.connection.query(
    `UPDATE enterprises SET name ='${enterprise.name}', nit = '${enterprise.nit}', phone = '${enterprise.phone}',address='${enterprise.address}'  WHERE id='${enterprise.id}'`,
    (err: any, results: any) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send("Error querying database.");
      }
      return res.status(200).send(results);
    }
  );
};
