import { Router } from "express";
import { createEnterprises, deleteEnterprises, getEnterprises, updateEnterprises } from "../service/enterprises";

const routerEnterprises = Router();

routerEnterprises.get("/getEnterprises", getEnterprises);
routerEnterprises.post("/registerEnterprise", createEnterprises);
routerEnterprises.post("/updateEnterprise", updateEnterprises);
routerEnterprises.post("/deleteEnterprise", deleteEnterprises);
export default routerEnterprises;
