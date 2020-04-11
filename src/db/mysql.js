const mysql = require('mysql');

function createConnection() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "agro_trade"
  });
  return connection;
}

async function executeQuery(query) {
  console.log('SQL query :-', query);
  const connection = createConnection();
  connection.query(query, (err, data) => {
    if(err) throw err;
    console.log('query executed successfully.');
  });
  return true;
}


module.exports.createConnection = createConnection;
module.exports.executeQuery = executeQuery;
