const express = require('express');
const app = express();
const cors = require('cors');

const MySQL = require('../db/mysql');

// use cors to allow cross origin resource sharing.
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/create', function(req, res) {
  const newFarmer = {
    fname: req.body.fname,
    lname: req.body.lname,
  };

  const sql = `INSERT INTO farmer_info
    values(
      1,
      '0x1bBb3d28254c8a8C94Cea364af1663C40Ee6E4a6',
      '0x64EC88CA00B268E5BA1A35678A1B5316D212F4F366B2477232534A8AECA37F3C',
      '${newFarmer.fname}',
      '${newFarmer.lname}'
    );`;

    MySQL.executeQuery(sql);
});

app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});
