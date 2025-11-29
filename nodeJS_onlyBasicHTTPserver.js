 // Imports Node.js built-in HTTP module
const http = require('http')

 // Creates a server that replies to every request with a textmessage
 http.createServer((req, res) =>{
 res.end('Hello from Node.js'); // Sends a simple response
 }).listen(3000); // The server listens on port 3000
 
 console.log('Open : http://localhost:3000');
