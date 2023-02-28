"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.deleteItem = exports.createItem = exports.getItem = void 0;
const connection = require("./../models/connection");
const getItem = (req, res) => {
    console.log("BODY", req.body);
    connection.connection.query(`SELECT * FROM item WHERE enterprise = '${req.body.body.id}'`, (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
    });
};
exports.getItem = getItem;
const createItem = (req, res) => {
    const item = req.body.data;
    console.log("ITE", item);
    connection.connection.query(`INSERT INTO item (name,enterprise) VALUES ('${item.name}','${Number(item.enterprise)}');`, (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
    });
};
exports.createItem = createItem;
const deleteItem = (req, res) => {
    connection.connection.query(`DELETE FROM item WHERE id='${req.body.id}'`, (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
    });
};
exports.deleteItem = deleteItem;
const updateItem = (req, res) => {
    const item = req.body.body;
    connection.connection.query(`UPDATE item SET name ='${item.name}', enterprise = '${item.enterprise}''  WHERE id='${item.id}'`, (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
    });
};
exports.updateItem = updateItem;
//# sourceMappingURL=item.js.map