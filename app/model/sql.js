const Sequelize = require('sequelize');

const sequelize = new Sequelize("bfcv19", "root", "sasa", {
    host: "localhost",
    dialect: "mariadb",
    port: 3306
});


const Registro = sequelize.define('registros', {
    Id: { type: Sequelize.NUMBER },
    FirstName: { type: Sequelize.STRING },
    LastName: { type: Sequelize.STRING },
    Email: { type: Sequelize.STRING },
    Phone: { type: Sequelize.STRING },
    Password: { type: Sequelize.STRING },
    Cpassword: { type: Sequelize.STRING }
});

init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexión establecida correctamente.");
    }).catch(err => {
        console.error("conexión no establecida: ", err);
    });

};

getRegistros = function(callback) {
    Registro.findAll().then(registros => callback(registros));
};

module.exports.getRegistros = this.getRegistros;
module.exports.init = init;