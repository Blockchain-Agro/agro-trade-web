const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const MySQL = require('./mysql_farmer');

const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let farmers = [];

app.post('/create', function(req, res) {
  const newFarmer = {
    fname: req.body.fname,
    lname: req.body.lname,
  };

  farmers.push(newFarmer);
  console.log(farmers);
  const connection = MySQL.createConnection();
  const sql = `INSERT INTO farmer_info
    values(2, '0x3', '0x4', '${newFarmer.fname}', '${newFarmer.lname}');`;

  // executing query
  connection.query(sql, (err, data) => {
    if(err) throw err;
    console.log(`successfully added farmer info to db`);
  });
});


app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});
