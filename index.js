const http = require('node:http');
const hostname = 'localhost';
const port = 8900;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Henry Etuk\n');
  res.end();
});

server.listen(port, function ()  {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
