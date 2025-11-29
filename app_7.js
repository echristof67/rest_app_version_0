const express = require('express');
const app = express();
const port=3000;
const contacts=require("./src/db/contacts-data.js");

const morgan=require('morgan');
app.use(morgan('dev'));




app.get('/', (req, res) =>{
 res.set('Content-Type','text/plain');
 res.send('Hello from Express Root!');
 });
 
 app.get('/api/contacts/:id', (req, res) =>{
 const id=req.params.id;
 const searchedId=parseInt(req.params.id);
 const foundContact=contacts.find(
        arrayContactsElement => arrayContactsElement.id==searchedId
    );
 if (foundContact) {
    res.json(foundContact);
 } else {
    res.status(404).send('<h1>Contact not found!</h1>');
 }
 });

 app.listen(3000, () =>{
   console.log(`Server is running on http://localhost:${port}`);
 })

 