import { Router } from "express";
import { createEnterprises, deleteEnterprises, getEnterprises, updateEnterprises } from "../controllers/enterprises";

const routerEnterprises = Router();

routerEnterprises.get("/getEnterprises", getEnterprises);
routerEnterprises.post("/registerEnterprise", createEnterprises);
routerEnterprises.post("/updateEnterprise", updateEnterprises);
routerEnterprises.delete("/deleteEnterprise", deleteEnterprises);
export default routerEnterprises;
