// TABLES UPDATED : farmer_login, farmer_info
// INSERT operation only

const express = require('express');
const app = express();
const cors = require('cors');

const bs = require('../contracts/bs');
const farmerContract = require('../contracts/farmer');
// const MySQL = require('../db/mysql');

// use cors to allow cross origin resource sharing.
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/create-farmer', async function(req, res) {
  const data = {
    ethereumAddress: req.body.dataForIpfs.ethereumAddress,
    ipfsHash: req.body.ipfsHash,
    fname: req.body.dataForIpfs.fname,
    lname: req.body.dataForIpfs.lname,
    mname: req.body.dataForIpfs.mname,
    email: req.body.dataForIpfs.email,
    address: req.body.dataForIpfs.block + " " + req.body.dataForIpfs.street,
    city: req.body.dataForIpfs.city,
    state: req.body.dataForIpfs.state,
    phone:req.body.dataForIpfs.phno1 + " " + req.body.dataForIpfs.phno2,
    zip:req.body.dataForIpfs.zip,
    password: req.body.password,
  };

  // store to contract on blockchain
  const ipfsHashInBytes32 = bs.getBytes32FromIpfsHash(data.ipfsHash);
  await farmerContract.addFarmer(
    ipfsHashInBytes32,
    data.ethereumAddress,
  );
  // store data to db

  // return success

});

app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});

// create /login post req for login part corresponding changes are already made in FarmerLogin.jsx(check handle submit)
