const isAuthenticated = require('./isAuthenticated');
module.exports = function(app, sql) {

    app.get("/registros", function(req, res) {

        sql.getRegistros(function(result) {
            res.send(result);

        });
    });




    app.get("/user/:Email", isAuthenticated, function(request, response) {

        sql.getUsuario({ Email: request.params.Email }, function(registro) {
            response.send(registro);
        });

    });


}