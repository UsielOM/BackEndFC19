module.exports = function(app, sql) {

    app.get("/registros", function(req, res) {

        sql.getRegistros(function(result) {
            res.send(result);

        });
    });

    // app.post("/registrar", function(request, response) {

    //     sql.createRegistro(request.body, function(result) {
    //         response.send(result);
    //     });
    // });
}