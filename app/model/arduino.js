const serialPort = require('serialport');
module.exports = function() {
    const port = new serialPort('COM5', { baudRate: 9600 });

    const parser = new serialPort.parser.Readline();

    port.pipe(parser);

    parser.on('data', (line) => {
        console.log("El arduino dice: ", line);
        port.write('Era una vez');
    });

}