var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
  var filepath = './';

  switch (req.url) {
    case '/':
      filepath += 'index.html';
      break;
    case '/about':
      filepath += 'about.html';
      break;
    case '/contactme':
      filepath += 'contactme.html';
      break;
    default:
      filepath += '404.html';
      break;
  }

  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading page');
    }
    res.writeHead(filepath.includes('404.html') ? 404 : 200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});
