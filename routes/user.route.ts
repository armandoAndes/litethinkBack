import { login } from "./../controllers/user";

import { Router } from "express";

const routerUser = Router();

routerUser.post("/login", login);
export default routerUser;
