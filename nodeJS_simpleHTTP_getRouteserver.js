const http = require('http');
 // Creates an HTTP server
 const server = http.createServer((req, res) =>{
 // Checks if the method is GET and the URL is "/"
 if(req.method === 'GET' && req.url === '/') {
 res.writeHead(200, { 'Content-Type': 'text/html'}); // Sets the content type
 res.end('<h1>Hello Node JS</h1>'); // Sends the response
 } else {
 res.writeHead(404); // Responsefor other routes
 res.end('Page not found');
 }
 });
 // Starts the server on port 3000
 server.listen(3000);

 console.log('Open : http://localhost:3000');

 