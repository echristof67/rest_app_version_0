const express = require('express');
const app = express();
const port=3000;
//const contacts=require("./src/db/contacts-data.js");
const sequelize=require('./src/db/sequelize.js')

const morgan=require('morgan');
app.use(morgan('dev'));

sequelize.initDB();

app.get('/', (req, res) => res.send('Express, Sequelize and MariaDB REST API'));

 app.listen(3000, () =>{
   console.log(`Server is running on http://localhost:${port}`);
 })

 