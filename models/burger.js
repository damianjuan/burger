const orm = require("../config/orm");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: () => {
        orm.create("burgers", burger_name, (res) => {
            cb(res);
        });
    },
    updateOne: () => {
        orm.update("burgers", (res) => {
            cb(res);
        });
    }
}


module.exports = burger;