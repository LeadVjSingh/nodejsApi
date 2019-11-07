


var http = require('http');
var fz = require('./fizzbuzzapi');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
    var q = url.parse(req.url, true).query;
  var txt = String(fz(String(q.count)));
  res.end(txt);
  res.end();
}).listen(8080);