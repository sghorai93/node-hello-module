var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); //To write the Header.
    res.write('Hello World !');
    res.write('<br/>');

    var requestedUrl = req.url;

    console.log('Requested url -> ' + requestedUrl);
    res.write(requestedUrl);

    //Get Request Parameter
    //url -> http://localhost:8080/?name=sandip&class=five
    var q = url.parse(requestedUrl, true).query;
    var txt = q.name + " " + q.class;
    res.write(txt);
   
    res.end();
}).listen(8080);