const Sequelize = require('sequelize');

const sequelize = new Sequelize("bfcv19", "root", "sasa", {
    host: "localhost",
    dialect: "mariadb",
    port: 3306
});

init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexión establecida correctamente.");
    }).catch(err => {
        console.error("conexión no establecida: ", err);
    });
};

module.exports.init = init;