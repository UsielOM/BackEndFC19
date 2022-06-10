const jwtUtil = require('./jwtUtil');
module.exports = function(app, sql) {

    app.get("/registros", function(req, res) {

        sql.getRegistros(function(result) {
            res.send(result);

        });
    });


    app.get("/user/:Email", function(request, response) {

        const token = request.get("Authorization");
        const verified = jwtUtil.verifyJwt(token);
        if (!verified) {
            response.sendStatus(401);
        } else {
            sql.getUsuario({ Email: request.params.Email }, function(registro) {
                response.send(registro);
            });
        }

    });


}