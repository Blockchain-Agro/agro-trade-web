const mysql = require('mysql');
const util = require('util');

function createConnection() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "agro_trade"
  });
  const query = util.promisify(connection.query).bind(connection);
  return query;
}

async function executeQuery(query) {
  console.log('SQL query :-', query);
  const connection = createConnection();
  const status = await connection(query);
  console.log("executeQuery status : ",status);
  return true;
}

async function isRegisteredFarmer(query) {
  console.log(query);
  const connection = createConnection();
  const rows = await connection(query);
  if(rows[0]) {
    return true;
  }
  return false;
}

async function getData(query) {
  console.log(query);
  const connection = createConnection();
  const rows = await connection(query);
  return rows;
}

module.exports.createConnection = createConnection;
module.exports.executeQuery = executeQuery;
module.exports.isRegisteredFarmer = isRegisteredFarmer;
module.exports.getData = getData;
