const { Sequelize, DataTypes} = require('sequelize');
const ContactModel=require('../models/contact.js');

const sequelize = new Sequelize(
  'contacts', 
  'root', 
  '', 
  {
  host: 'localhost',
  port:3307,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
});

sequelize.authenticate()
    .then(() => console.log("Successful DB connection..."))
    .catch(error => console.error(`Database connection error ${error}`));

// Initialize the model
const Contact = ContactModel(sequelize, DataTypes);

// synchronize the model
sequelize.sync({force: true})
  .then(() => console.log('Synchonized DB!'));


module.exports = Contact