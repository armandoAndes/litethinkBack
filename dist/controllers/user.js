"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const connection = require("./../models/connection");
const login = (req, res) => {
    console.log("REQ", `SELECT * FROM user WHERE name = '${req.body.body.name}' AND password = '${req.body.body.password}'`);
    connection.connection.query("SELECT * FROM `user` WHERE name = '" +
        req.body.body.name +
        "' AND  password ='" +
        req.body.body.password +
        "'" +
        " ;", (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
    });
};
exports.login = login;
//# sourceMappingURL=user.js.map