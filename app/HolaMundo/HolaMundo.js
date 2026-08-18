let http = require('http');
let index = "<h1>P&aacute;gina desde Node.JS puerto 80</h1>";
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(80);