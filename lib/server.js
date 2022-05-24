const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor listo y escuchando en el puerto:${port}`);
})

app.get("/", function(require, response) {
    response.send("BackEnd de FC19 Funcionando <(*-*<)");
});