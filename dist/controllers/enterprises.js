"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEnterprises = exports.deleteEnterprises = exports.createEnterprises = exports.getEnterprises = void 0;
const connection = require("./../models/connection");
const getEnterprises = (req, res) => {
    connection.connection.query("SELECT * FROM enterprises", (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
    });
};
exports.getEnterprises = getEnterprises;
const createEnterprises = (req, res) => {
    const enterprise = req.body.data;
    connection.connection.query(`INSERT INTO enterprises (name,nit,phone,address) VALUES ('${enterprise.name}','${enterprise.nit}','${enterprise.phone}','${enterprise.address}');`, (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
    });
};
exports.createEnterprises = createEnterprises;
const deleteEnterprises = (req, res) => {
    connection.connection.query(`DELETE FROM enterprises WHERE id='${req.body.id}'`, (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
    });
};
exports.deleteEnterprises = deleteEnterprises;
const updateEnterprises = (req, res) => {
    const enterprise = req.body.body;
    connection.connection.query(`UPDATE enterprises SET name ='${enterprise.name}', nit = '${enterprise.nit}', phone = '${enterprise.phone}',address='${enterprise.address}'  WHERE id='${enterprise.id}'`, (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
    });
};
exports.updateEnterprises = updateEnterprises;
//# sourceMappingURL=enterprises.js.map