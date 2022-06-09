module.exports = function(app, sql) {
    const crypto = require('crypto');


    app.post("/registrar", function(request, response) {
        request.body.Cpassword = crypto.randomBytes(16).toString("hex");

        var passwordHash = crypto.pbkdf2Sync(request.body.Password, request.body.Cpassword, 1000, 64, "sha512")
            .toString("hex");

        request.body.Password = passwordHash;
        sql.createRegistro(request.body, function(result) {
            response.send(result);
        });
    });
};