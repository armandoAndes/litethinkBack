import { Request, Response } from "express";
import { Item } from "../models/item";

const connection = require("./../models/connection");

export const getItem = (req: Request, res: Response) => {
    console.log("BODY",req.body)
  connection.connection.query(
    `SELECT * FROM item WHERE enterprise = '${req.body.body.id}'`,
    (err: any, results: any) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send("Error querying database.");
      }
      return res.status(200).send(results);
    }
  );
};
export const createItem = (req: Request, res: Response) => {
  const item: Item = req.body.data;
  console.log("ITE", item);
  connection.connection.query(
    `INSERT INTO item (name,enterprise) VALUES ('${item.name}','${Number(
      item.enterprise
    )}');`,
    (err: any, results: any) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send("Error querying database.");
      }
      return res.status(200).send(results);
    }
  );
};
export const deleteItem = (req: Request, res: Response) => {
  connection.connection.query(
    `DELETE FROM item WHERE id='${req.body.id}'`,
    (err: any, results: any) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send("Error querying database.");
      }
      return res.status(200).send(results);
    }
  );
};
export const updateItem = (req: Request, res: Response) => {
  const item: Item = req.body.body;
  connection.connection.query(
    `UPDATE item SET name ='${item.name}', enterprise = '${item.enterprise}''  WHERE id='${item.id}'`,
    (err: any, results: any) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send("Error querying database.");
      }
      return res.status(200).send(results);
    }
  );
};
