const connection = require("./connection");

// selectAll()
// insertOne()
// updateOne()

const orm = {
    selectAll: (tableName) => {
        const queryString = "SELECT * FROM ?;";
        connection.query(queryString, [tableName], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: (name) => {
        const queryString = `INSERT INTO burgers (burger_name) VALUES (${name});`
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: () => {
        const queryString = `UPDATE burgers SET devoured = true WHERE burger_name = (${name});`
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;