// TABLES UPDATED : farmer_login, farmer_info
// INSERT operation only

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

app.post('/create', async function(req, res) {
  const newFarmer = {
    ethereumAddress: req.body.ethereumAddress,
    ipfsHash: req.body.ipfsHash,
    fname: req.body.fname,
    lname: req.body.lname,
    email:req.body.email,
    addr:req.body.block + " " + req.body.street,
    city: req.body.city,
    state: req.body.state,
    phno:req.body.phno1 + " " + req.body.phno2,
    zip:req.body.zip,
    password:req.body.password,
  };
  // TO Do: static ipfs hash is used change it to actual dynamic
/*  const sql = `INSERT INTO farmer_info(ethereum_address, ipfs_hash, first_name, last_name)
    values(
      '${newFarmer.ethereumAddress}',
      '${newFarmer.ipfsHash}',
      '${newFarmer.fname}',
      '${newFarmer.lname}'
    );`;

*/

// TODO get ipfs hash and account address from ipfs and ganache respectively

    const e_add_test = 'Qmadjsndajndajns';
    const ipfshash_test = "13xsda12d21";
    const sql1 = `INSERT INTO farmer_login(email, password)
    values(
      '${newFarmer.email}',
      '${newFarmer.password}'
    );`;

    const sql2 = `INSERT INTO farmer_info(email,eth_address,ipfs_hash,trust,review_count,first_name,last_name,address, city,state,phone_number)
    values(
      '${newFarmer.email}',
      '${e_add_test}',
      '${ipfshash_test}',
      5,
      1,
      '${newFarmer.fname}',
      '${newFarmer.lname}',
      '${newFarmer.addr}',
      '${newFarmer.city}',
      '${newFarmer.state}',
      '${newFarmer.phno}'
    );`;


    MySQL.executeQuery(sql1);
    MySQL.executeQuery(sql2);
    console.log("\n\nADDED ENTRY in farmer info and farmer login table\n");
    
  });

app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});

// create /login post req for login part corresponding changes are already made in FarmerLogin.jsx(check handle submit)  