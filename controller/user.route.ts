import { login } from "../service/user";

import { Router } from "express";

const routerUser = Router();

routerUser.post("/login", login);
export default routerUser;
