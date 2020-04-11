const web3 = require('../web');
const FarmerContract = require('../config/FarmerContract.json');

async function getFarmerContractInstance() {
  const abi = FarmerContract.abi;
  const address = FarmerContract.address;

  const instance = new web3.eth.Contract(abi, address);
  return instance;
}

module.exports.getFarmerContractInstance = getFarmerContractInstance;
