module.exports = function(app, sql) {
    app.get("/registros", function(req, res) {
        sql.getRegistros(function(result) {
            res.send(result);
            res.json(result);
        });
    })
}