const Sequelize = require('sequelize');

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
        console.log("Conexión establecida correctamente.");
    }).catch(err => {
        console.error("conexión no establecida: ", err);
    });

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

addUser = function(user, callback) {
    Usersregister.create({
        Nombre: user.Nombre,
        Apellido_paterno: user.Apellido_paterno,
        Apellido_materno: user.Apellido_materno,
        CURP: user.CURP,
        Fecha_nacimiento: user.Fecha_nacimiento,
        Sexo: user.Sexo,
        Email: user.Email,
        password: user.password,
        tipeu: user.tipeu, //tu
        salt: user.salt
    }).then(callback(true));
}


module.exports.getRegistros = getRegistros;
module.exports.createRegistro = createRegistro;
module.exports.init = init;