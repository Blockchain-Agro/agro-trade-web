// TABLES UPDATED : farmer_login, farmer_info
// INSERT operation only

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// const bs = require('../contracts/bs');
// const farmerContract = require('../contracts/farmer');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/create-farmer', async function(req, res) {
  const data = {
    ethAddress: req.body.ethAddress,
    ipfsHash: req.body.ipfsHash,
    fname: req.body.fname,
    mname: req.body.mname,
    lname: req.body.lname,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    phone: req.body.phone,
    zip: req.body.zip,
    password: req.body.password,
  };

  console.log(data);

  // store to contract on blockchain

  // const ipfsHashInBytes32 = bs.getBytes32FromIpfsHash(data.ipfsHash);
  // await farmerContract.addFarmer(
  //   ipfsHashInBytes32,
  //   data.ethAddress,
  // );

  // store data to farmer_login table
  const addToLoginQuery = `INSERT INTO farmer_login(email, password)
    values(
      '${data.email}',
      '${data.password}'
    );`;

  const addToLoginQueryStatus = await MySQL.executeQuery(addToLoginQuery);

  // store data to farmer_info table
  const sql = `INSERT INTO farmer_info(email, eth_address,ipfs_hash,trust,
    review_count, first_name, middle_name, last_name, address, city, state, zip)
    values(
      '${data.email}',
      '${data.ethAddress}',
      '${data.ipfsHash}',
      5,
      1,
      '${data.fname}',
      '${data.mname}',
      '${data.lname}',
      '${data.address}',
      '${data.city}',
      '${data.state}',
      ${data.zip}
      );`;

  const addToFarmerInfoQueryStatus = MySQL.executeQuery(sql);
  if(addToLoginQueryStatus && addToFarmerInfoQueryStatus) {
    return true;
  }
  return true;
});

app.post('/farmer-login', async function(req, res) {
  const data = {
    email: req.body.email,
    password: req.body.password,
  }
  const sql = `SELECT id FROM farmer_login WHERE email='${data.email}' and password='${data.password}';`;
  const fetchLoginDataStatus = await MySQL.isRegisteredFarmer(sql);
  console.log('Fetch login data :-', fetchLoginDataStatus);

  let fetchQueryData;
  let responseData;
  if(fetchLoginDataStatus) {
    const fetchQuery = `SELECT * FROM farmer_info where email='${data.email}';`;
    fetchQueryData = await MySQL.getData(fetchQuery);
    responseData = {
      status: fetchLoginDataStatus,
      farmerData: fetchQueryData,
    }
    res.end(JSON.stringify(responseData));
  } else {
    responseData = {
      status: fetchLoginDataStatus,
    }
    res.end(JSON.stringify(responseData));
  }
});

// NOTE: not used now.
app.get('/farmer-signup-data', async function(req, res) {
  const sql = `SELECT * FROM farmer_info WHERE email='rajat@hotmail.com';`;
  const fetchedData = await MySQL.getData(sql);
  console.log('Fetched data :-',fetchedData);
  res.end(JSON.stringify(JSON.stringify(fetchedData)));
});

app.post('/add-product', async function(req, res) {
  console.log("insode add-product");

  const data = {
    farmer_address:req.body.farmerAddress,
    eth_id:req.body.eth_id,
    ipfs_hash:req.body.ipfsHash,
    name:req.body.name,
    price:req.body.price,
    quantity:req.body.quant,
    type:req.body.type
  }
  const sql = `INSERT INTO product_info (farmer_address,eth_id,ipfs_hash,name,price,quantity,type) values(
    '${data.farmer_address}',
    '${data.eth_id}',
    '${data.ipfs_hash}',
    '${data.name}',
    '${data.price}',
    '${data.quantity}',
    '${data.type}'
    );`;

    console.log("\n\nQuery :\n" + sql + "\n");
    const addProduct = await MySQL.executeQuery(sql);
    console.log("Adding status :" + addProduct);
    if(addProduct) {
      return true;
    }
    else {
          return false;
    }
});


app.post('/create-vendor', async function(req, res) {
  const data = {
    ethAddress: req.body.ethAddress,
    ipfsHash: req.body.ipfsHash,
    fname: req.body.fname,
    mname: req.body.mname,
    lname: req.body.lname,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    phone: req.body.phone,
    zip: req.body.zip,
    password: req.body.password,
  };

  console.log(data);

  const addToLoginQuery = `INSERT INTO vendor_login(email, password)
    values(
      '${data.email}',
      '${data.password}'
    );`;

  const addToLoginQueryStatus = await MySQL.executeQuery(addToLoginQuery);

  // store data to farmer_info table
  const sql = `INSERT INTO vendor_info(email, eth_address,ipfs_hash,trust,
    review_count, first_name, middle_name, last_name, address, city, state, zip)
    values(
      '${data.email}',
      '${data.ethAddress}',
      '${data.ipfsHash}',
      5,
      1,
      '${data.fname}',
      '${data.mname}',
      '${data.lname}',
      '${data.address}',
      '${data.city}',
      '${data.state}',
      ${data.zip}
      );`;

  const addToVendorInfoQueryStatus = MySQL.executeQuery(sql);
  if(addToLoginQueryStatus && addToVendorInfoQueryStatus) {
    return true;
  }
  return true;
});

app.post('/vendor-login', async function(req, res) {
  const data = {
    email: req.body.email,
    password: req.body.password,
  }
  const sql = `SELECT id FROM vendor_login WHERE email='${data.email}' and password='${data.password}';`;
  const fetchLoginDataStatus = await MySQL.isRegisteredFarmer(sql);  //same function for both farmer and vendor
  console.log('Fetch login data :-', fetchLoginDataStatus);

  let fetchQueryData;
  let responseData;
  if(fetchLoginDataStatus)
  {
    const fetchQuery = `SELECT * FROM vendor_info where email='${data.email}';`;
    fetchQueryData = await MySQL.getData(fetchQuery);
    responseData = {
      status: fetchLoginDataStatus,
      farmerData: fetchQueryData,
    }
    res.end(JSON.stringify(responseData));
  }
  else
  {
    responseData = {
      status: fetchLoginDataStatus,
    }
    res.end(JSON.stringify(responseData));
  }
});

app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});
