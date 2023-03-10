import { Request, Response } from "express";
import ItemEntity, { Item } from "../models/item";

export const getItem = async (req: Request, res: Response) => {
  try {
    console.log("BODY getItem", req.body.body);
    const items = await ItemEntity.findAll({
      where: {
        enterprise: req.body.body.id,
      },
    });
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const createItem = async (req: Request, res: Response) => {
  try {
    console.log("BODY createItem", req.body.data);
    const item: Item = req.body.data;
    const existItem = await ItemEntity.findOne({
      where: {
        name: item.name,
        enterprise: item.enterprise,
      },
    });
    if (existItem) {
      return res.status(400).json({
        message: `Ya existe item ${item.name}`,
      });
    }
    const newItem = await ItemEntity.create({
      name: item.name,
      enterprise: item.enterprise,
    });
    return res.status(200).json(newItem);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const deleteItem = async (req: Request, res: Response) => {
  try {
    console.log("BODY deleteItem", req.body);
    const item = await ItemEntity.findByPk(req.body.id);
    if (!item) {
      return res.status(404).json({
        message: `No existe el item ${req.body.id}`,
      });
    }
    await ItemEntity.destroy({
      where: {
        id: req.body.id,
      },
    });
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const updateItem = async (req: Request, res: Response) => {
  try {
    console.log("BODY updateItem", req.body.body);
    const item: Item = req.body.body;
    const resItem = await ItemEntity.findByPk(item.id);
    if (!resItem) {
      return res.status(404).json({
        message: `No existe el item ${req.body.id}`,
      });
    }
    await ItemEntity.update(item, {
      where: {
        id: item.id,
      },
    });
    return res.status(200).json(resItem);
  } catch (error) {
    return res.status(500).json(error);
  }
};
