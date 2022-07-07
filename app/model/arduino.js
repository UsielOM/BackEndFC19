const { SerialPort } = require('serialport');
const ReadlineParser = require('@serialport/parser-readline')

module.exports = function() {

    const port = new SerialPort({ path: 'COM6', baudRate: 9600, parser: ReadlineParser });
    // const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
    // port.on('open', function() {
    //     console.log('Conecion establecida correctamente');

    // });

    port.on('data', function(data) {
            console.log('Data:', data);
            // port.write(`Arduino dice:  ${data}`);
        })
        // const lineStream = port.pipe(new ReadlineParser())


}