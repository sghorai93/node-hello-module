var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    //Open or Read a File
    fs.readFile('file.txt', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

    /**
     * The fs.appendFile() method appends specified content to a file. 
     * If the file does not exist, the file will be created:
     */
    fs.appendFile('file.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

}).listen(8080);