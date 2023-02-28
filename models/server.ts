import { Application } from "express";
import routerEnterprises from "../routes/enterprises.route";
import routerItem from "../routes/item.routes";
import routerUser from "../routes/user.route";
const connection = require("./../models/connection");
const express = require("express");
const cors = require('cors');
class Server {
  public app: Application;
  private port: string;
  public connection: any;
  private apiPaths = {
    enterprises: "/api/enterprises",
    item: "/api/item",
    user: "/api/user"
  };
  public get Connection(): any {
    return this.connection;
  }
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // Métodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }
  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  private dbConnection(): void {
    this.connection = connection;
  }
  public routes(): void {
    this.app.use(this.apiPaths.enterprises, routerEnterprises);
    this.app.use(this.apiPaths.item, routerItem);
    this.app.use(this.apiPaths.user, routerUser);
  }
  public listen(): void {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
