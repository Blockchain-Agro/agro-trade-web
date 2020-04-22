// TABLES UPDATED : farmer_login, farmer_info
// INSERT operation only

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// const bs = require('../contracts/bs');
// const farmerContract = require('../contracts/farmer');
// const vendorContract = require('../contracts/vendor');
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
    review_count, first_name, middle_name, last_name, address, city, state, zip,phone_number)
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
      ${data.zip},
      ${data.phone}
      );`;

  const addToFarmerInfoQueryStatus = await MySQL.executeQuery(sql);
  if(addToLoginQueryStatus && addToFarmerInfoQueryStatus) {
    res.send({status:true});
  }
  else
  {
    res.send({status:false});
  }
});

app.post('/accept',async function(req, res){
  const data = {
    id: req.body.id,
  }

  const sql = `UPDATE product_info SET status = 1 where id =${data.id};`

  console.log("\n\nQuery :\n" + sql + "\n");
  const addProduct = await MySQL.executeQuery(sql);
  console.log("Adding status :" + addProduct);
  if(addProduct) {
    return true;
  }
  else {
        return false;
  }

})

app.post('/deny',async function(req, res){
  const data = {
    id: req.body.id,
    vendor_name:this.state.vendor_name,
  }

  const sql = `DELETE from pending_products where id = ${data.id} and vendor_address = (select eth_address from vendor_info where first_name = '${vendor_name}');`

  console.log("\n\nQuery :\n" + sql + "\n");
  const addProduct = await MySQL.executeQuery(sql);
  console.log("Adding status :" + addProduct);
  if(addProduct) {
    return true;
  }
  else {
        return false;
  }

})


app.post('/farmer-login', async function(req, res) {
  const data = {
    email: req.body.email,
    password: req.body.password,
  }
  const sql = `SELECT id FROM farmer_login WHERE email='${data.email}' and password='${data.password}';`;
  const fetchLoginDataStatus = await MySQL.isRegisteredFarmer(sql);
  console.log('Fetch login data status :-', fetchLoginDataStatus);

  let fetchQueryData;
  let responseData;
  if(fetchLoginDataStatus) {
    const fetchQuery = `SELECT * FROM farmer_info where email='${data.email}';`;
    fetchQueryData = await MySQL.getData(fetchQuery);
    responseData = {
      status: fetchLoginDataStatus,
      farmerData: fetchQueryData,
    }
    console.log('Response :-', responseData);
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
  console.log("inside add-product");

  const data = {
    farmer_address:req.body.farmerAddress,
    eth_id:req.body.eth_id,
    ipfs_hash:req.body.ipfsHash,
    name:req.body.productname,
    price:req.body.price,
    quantity:req.body.quant,
    type:req.body.type
  }

  // store data to contract
  // const ipfsHashInBytes32 = bs.getBytes32FromIpfsHash(data.ipfs_hash);
  // await farmerContract.addProduct(
  //   ipfsHashInBytes32,
  //   data.farmer_address,
  // );

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


app.post('/get-pending-products', async function(req, res) {
  const data = {
    farmer_address:req.body.farmer_address,
  }

  const sql = `SELECT * from product_info where farmer_address = '${data.farmer_address}' and status = 0; `;
  const fetchedNotification = await MySQL.getData(sql);
  console.log('fetched data :-', fetchedNotification);

  responseData = {
    fetchedNotification: fetchedNotification,
  }

  res.end(JSON.stringify(responseData));

});

app.post('/get-sold-products', async function(req, res) {
  const data = {
    farmer_address:req.body.farmer_address,
  }

  const sql = `SELECT * from product_info where farmer_address = '${data.farmer_address}' and status = 1; `;
  const fetchedNotification = await MySQL.getData(sql);
  console.log('fetched data :-', fetchedNotification);

  responseData = {
    fetchedNotification: fetchedNotification,
  }

  res.end(JSON.stringify(responseData));

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

  // store data to contract
  // const ipfsHashInBytes32 = bs.getBytes32FromIpfsHash(data.ipfsHash);
  // await vendorContract.addVendor(
  //   ipfsHashInBytes32,
  //   data.ethAddress,
  // );

  const addToLoginQuery = `INSERT INTO vendor_login(email, password)
    values(
      '${data.email}',
      '${data.password}'
    );`;

  const addToLoginQueryStatus = await MySQL.executeQuery(addToLoginQuery);

  // store data to farmer_info table
  const sql = `INSERT INTO vendor_info(email, eth_address,ipfs_hash,trust,
    review_count, first_name, middle_name, last_name, address, city, state, zip,phone_number)
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
      ${data.zip},
      ${data.phone}
      );`;

  const addToVendorInfoQueryStatus =  await MySQL.executeQuery(sql);
  console.log("Status : " , addToLoginQueryStatus , " and " , addToVendorInfoQueryStatus);
  if(addToLoginQueryStatus && addToVendorInfoQueryStatus)
  {
      res.send({status:true});
  }
  else
  {
    res.send({status:false});
  }
});

app.post('/get-farmer-notification', async function(req, res) {
  const data = {
    farmer_address:req.body.farmer_address,
  }

  console.log('Farmer Address :-', data.farmer_address);

  const sql = `SELECT product_info.id,pending_products.farmer_address,product_info.eth_id,product_info.ipfs_hash,product_info.name,product_info.type,product_info.quantity,product_info.status,product_info.price,vendor_info.first_name, vendor_info.phone_number from ((pending_products INNER JOIN product_info ON pending_products.product_id = product_info.id) INNER JOIN vendor_info ON vendor_info.eth_address = pending_products.vendor_address) where pending_products.farmer_address = '${data.farmer_address} and product_info.status = 0';`;

  console.log('Query :', sql);
  const fetchedNotification = await MySQL.getData(sql);
  console.log('fetched data :-', fetchedNotification);

  responseData = {
    fetchedNotification: fetchedNotification,
  }

  res.end(JSON.stringify(responseData));

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

app.post('/fetch-products',async function(req,res){
  const sql = `SELECT * FROM product_info;`;
  const product_info = await MySQL.getData(sql);
  res.end(JSON.stringify(product_info));

});

app.post('/add-purchase-request-vendor',async function(req,res){

  const fetch_id_query = `SELECT id FROM pending_products where product_id=${req.body.product_id}
   AND farmer_address='${req.body.farmer_address}'
   AND vendor_address='${req.body.vendor_address}';`;
   const already_exists = await MySQL.isRegisteredFarmer(fetch_id_query);
   if(already_exists)
   {
      const data = {
         status : false
      }
      res.end(JSON.stringify(data));
      return;
   }
   //Above part is done to ensure request is not duplicated

  const insert_entry = `INSERT INTO pending_products(product_id,farmer_address,vendor_address)
    values(
      ${req.body.product_id},
      '${req.body.farmer_address}',
      '${req.body.vendor_address}'
      );`;

  const QueryStatus = await MySQL.executeQuery(insert_entry);
  console.log("SENDING : ",QueryStatus);

  if(QueryStatus)
  {
     const pending_id = await MySQL.getData(fetch_id_query);
     const data = {
      status : QueryStatus,
      id : pending_id[0].id
     }
     console.log("SENDING : ",data);
     res.end(JSON.stringify(data));
  }
  else
  {
      const data = {
        status : QueryStatus
      }
      res.end(JSON.stringify(data));
  }

});


app.post('/fetch-pending-products',async function(req,res){

    const sql = `SELECT pi.id,pp.id as request_id,pi.farmer_address,eth_id,name,price,quantity,type
    FROM product_info pi,pending_products pp
    WHERE pi.id=pp.product_id AND pp.vendor_address='${req.body.vendor_address}';`;
    const pending_products = await MySQL.getData(sql);
    res.end(JSON.stringify(pending_products));
});

app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});
