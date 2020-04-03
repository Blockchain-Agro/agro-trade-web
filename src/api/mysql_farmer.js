const mysql = require('mysql');

function createConnection() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "agro-trade"
  });
  return connection;
}

function executeQuery(query) {
  const connection = createConnection();
  connection.query(query, (err, data) => {
    if(err) throw err;
    console.log('query executed successfully.');
  });
}


module.exports.createConnection = createConnection;
module.exports.executeQuery = executeQuery;
