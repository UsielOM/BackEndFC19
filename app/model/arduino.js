const { SerialPort } = require('serialport')
module.exports = function() {

    const port = new SerialPort({ path: 'COM6', baudRate: 9600 })
    port.on('open', function() {
        console.log('Conecion establecida correctamente');

    });
    port.on('data', function(data) {
        console.log('Data:', data);
        port.write(`Arduino dice:  ${data}`);
    })


}