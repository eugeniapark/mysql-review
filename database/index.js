const Sequelize = require('sequelize');

const connection = new Sequelize('todo_list', 'root', '', {
  //database name, user, password (but no pw = '')
  host: 'localhost',
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => console.log('successfuly connected to db'))
  .catch(err => console.log('Error establishing connection to db', err));

module.exports = connection;


//SETS UP THE CONNECTION / initializes database
//.AUTHENTICATE -- TESTS