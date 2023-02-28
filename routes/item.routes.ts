import { createItem, deleteItem, updateItem } from './../controllers/item';
import { Router } from "express";
import { getItem } from "../controllers/item";


const routerItem = Router();

routerItem.post("/getItem", getItem);
routerItem.post("/registerItem", createItem);
routerItem.post("/updateItem", updateItem);
routerItem.delete("/deleteItem", deleteItem);
export default routerItem;