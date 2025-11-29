const { Sequelize, DataTypes} = require('sequelize');
const ContactModel=require('../models/contact.js');
const contacts = require('./contacts-data.js')

const sequelize = new Sequelize(
  'christoffel_ufaz2025', 
  '98509_ufaz2025', 
  'AtS88Vi75d', 
  {
  host: 'mysql-christoffel.alwaysdata.net',
  port:3306,
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
const initDB = () => {
  return sequelize.sync({force: true})
  .then(() => {
    console.log('Synchonized DB!')
    contacts.map(contact => {
      Contact.create({
        isActive: contact.isActive,
        age: contact.age,
        lastname: contact.lastname,
        firstname: contact.firstname,
        gender: contact.gender,
        email: contact.email
      }).then(contact => console.log(contact.toJSON()))
    })
  })
  .catch(error => console.error(`Sync error: ${error}`));
}

module.exports = { Contact , initDB }