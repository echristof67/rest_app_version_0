 // basicExpressApp.js
 // Importing the Express framework
 const express = require('express');
 // Creating an Express application
 const app = express();
 // Defining a simple GET route
 app.get('/', (req, res) =>{
 res.send('Hello fromExpress!');
 });
 // Server start on port 3000
 app.listen(3000, () =>{
 console.log('Server is running on http://localhost:3000');
 })

 