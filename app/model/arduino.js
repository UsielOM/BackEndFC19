const SerialPort = require('serialport');
module.exports = function() {
    const port = new SerialPort('COM6', {
        baudRate: 9600
    });

    const parser = new SerialPort.parsers.Readline();

    port.pipe(parser);

    parser.on('data', (line) => {
        console.log(`El arduino dice: ${line}`);
        port.write('Tu mensaje si llego');
    })
}