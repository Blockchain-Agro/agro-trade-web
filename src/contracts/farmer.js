// const Utils = require('./utils');

const interacts = require('./interacts/interacts');

async function addFarmer(ipfsHash, address) {
  const instance = await interacts.getFarmerContractInstance();

  const txReceipt = await instance.methods.addFarmer(ipfsHash).send({from: address});
  return txReceipt;
}

async function addProduct(ipfsHash, address) {
  const instance = await interacts.getFarmerContractInstance();

  const txReceipt = await instance.methods.addItem(ipfsHash).send({from: address});
  return txReceipt;
}

async function getFarmer(address) {
  const instance = await interacts.getFarmerContractInstance();
  const data = await instance.methods.farmers(address).call();
  console.log('Farmer data :-', data);
}

// addFarmer();
// getFarmer();

module.exports.addFarmer = addFarmer;
module.exports.getFarmer = getFarmer;
module.exports.addProduct = addProduct;
