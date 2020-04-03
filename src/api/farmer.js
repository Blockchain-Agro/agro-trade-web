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
    ethereumAddress: req.body.ethereumAddress,
    ipfsHash: req.body.ipfsHash,
    fname: req.body.fname,
    lname: req.body.lname,
  };

  // TO Do: static ipfs hash is used change it to actual dynamic
  const sql = `INSERT INTO farmer_info
    values(
      '${newFarmer.ethereumAddress}',
      '${newFarmer.ipfsHash}',
      '${newFarmer.fname}',
      '${newFarmer.lname}'
    );`;

    MySQL.executeQuery(sql);
});

app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});
