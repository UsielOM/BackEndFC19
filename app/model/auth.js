module.exports = function(app, sql) {
    const crypto = require('crypto');
    const jwtUtil = require('./jwtUtil');

    //Metodo registar con encriptacion 
    app.post("/registrar", function(request, response) {
        request.body.Cpassword = crypto.randomBytes(16).toString("hex");

        var passwordHash = crypto.pbkdf2Sync(request.body.Password, request.body.Cpassword, 1000, 64, "sha512")
            .toString("hex");

        request.body.Password = passwordHash;
        sql.createRegistro(request.body, function(result) {
            response.send(result);
        });
    });

    //Metodo Login

    app.post("/login", function(request, response) {
        const Email = request.body.Email;
        const Password = request.body.Password;

        sql.login({ Email, Password }, result => {
            if (!result) {
                response.send(401);

            } else {
                var token = jwtUtil.signJwt(Email);
                response.send({ token });

            }
        });

    });
    app.post("/user/auth", function(request, response) {
        var valid = jwtUtil.verifyJwt(request.body.token);
        response.send(valid != false);
    })
};