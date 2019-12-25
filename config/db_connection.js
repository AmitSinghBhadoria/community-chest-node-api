require('dotenv').config({path: 'TradersBiomassAPI/.env'});
const mysql = require("mysql");

    var dbConnection = mysql.createConnection({
      host: "13.127.107.102",
      user: "root",
      password: "LexxDigital@5132#",
      database: "cryption_studios"
  })

dbConnection.connect((err) => {
    if(err){
        console.log('Error connecting to Db', err);
        return;
      }
      console.log('Connection established');
})

module.exports = dbConnection;

