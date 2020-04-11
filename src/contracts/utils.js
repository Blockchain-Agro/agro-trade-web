const web3 = require('./web');

async function getAccountForFarmer() {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

async function getAccountForVendor() {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

module.exports.getAccountForFarmer = getAccountForFarmer;
module.exports.getAccountForVendor = getAccountForVendor;
