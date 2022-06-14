const Sequelize = require('sequelize');
const crypto = require('crypto');

const sequelize = new Sequelize("bfcv19", "root", "sasa", {
    host: "localhost",
    dialect: "mariadb",
    port: 3306
});


const Registro = sequelize.define('registros', {

    FirstName: { type: Sequelize.STRING },
    LastName: { type: Sequelize.STRING },
    Email: { type: Sequelize.STRING },
    Phone: { type: Sequelize.STRING },
    Password: { type: Sequelize.STRING },
    Cpassword: { type: Sequelize.STRING }
});

init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexión establecida exitosamente.");
    }).catch(err => {
        console.error("conexión no establecida: ", err);
    });
    // Registro.sync();
};

getRegistros = function(callback) {
    Registro.findAll().then(registros => callback(registros));
};

createRegistro = function(request, callback) {
    Registro.create({
        FirstName: request.FirstName,
        LastName: request.LastName,
        Email: request.Email,
        Phone: request.Phone,
        Password: request.Password,
        Cpassword: request.Cpassword
    }).then(callback(true));
};


getUsuario = function(request, callback) {
    Registro.findOne({
        where: {
            Email: request.Email
        }
    }).then(registro => callback(registro));
}


login = function(request, callback) {
    Registro.findOne({
        where: {
            Email: request.Email

        }
    }).then(function(user) {
        if (user !== null) {
            var passwordHash = crypto.pbkdf2Sync(request.Password, user.Cpassword, 1000, 64, "sha512")
                .toString("hex");

            if (passwordHash === user.Password) {
                callback(true);
                return;
            }
        }
        callback(false);
    });
}

module.exports.getRegistros = getRegistros;
module.exports.createRegistro = createRegistro;
module.exports.init = init;
module.exports.login = login;
module.exports.getUsuario = getUsuario;