const express = require('express');
const app = express();
const port=3000;

app.get('/', (req, res) =>{
 res.set('Content-Type','text/plain');
 res.send('Hello from Express Root!');
 });
 
app.get('/api/contacts/', (req, res) =>{
 res.set('Content-Type','text/html');
 res.send('<h1>Hello from /api/contact/ route</h1>');
 });

 app.get('/api/contacts/:id', (req, res) =>{
  const id=req.params.id;
  res.set('Content-Type','text/html');
 res.send(`<h1>Hello from /api/contact/${id} route</h1>`);
 });

 app.listen(3000, () =>{
   console.log(`Server is running on http://localhost:${port}`);
 })

 