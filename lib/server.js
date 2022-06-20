const express = require('express');
const cors = require('cors');
const sql = require('./../app/model/sql');
const app = express();
const port = 3000;

var corsOptions = {
    origin: ["http://localhost:4200"]
}
app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, () => {

    console.log(`Servidor listo y escuchando en el puerto:${port}`);
    sql.init();

})

app.get("/", function(require, response) {
    response.send(" 🦁    BackEnd de FC19 Funcionando <(*-*<) 🦁");
});


require("./../app/model/usuarios.js")(app, sql);
require("./../app/model/auth.js")(app, sql);