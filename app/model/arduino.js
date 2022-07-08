const SerialPort = require('serialport');
module.exports = function() {

    const port = new SerialPort({
        path: 'COM5',
        baudRate: 2000000

    })
    port.on('data', function(data) {
        console.log(`El arduino dice: ${data}`)
        port.write(Buffer.from('Soy un: '))
    });
}