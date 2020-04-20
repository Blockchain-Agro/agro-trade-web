const web3 = require('../web3');
const FarmerContract = require('../config/FarmerContract.json');
const VendorContract = require('../config/VendorContract.json');

async function getFarmerContractInstance() {
  const abi = FarmerContract.abi;
  const address = FarmerContract.address;

  const instance = new web3.eth.Contract(abi, address);
  return instance;
}

async function getVendorContractInstance() {
  const abi = VendorContract.abi;
  const address = VendorContract.address;

  const instance = new web3.eth.Contract(abi, address);
  return instance;
}

module.exports.getFarmerContractInstance = getFarmerContractInstance;
module.exports.getVendorContractInstance = getVendorContractInstance;
