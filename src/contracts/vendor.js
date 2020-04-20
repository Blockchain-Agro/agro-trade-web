const interacts = require('./interacts/interacts');

async function addVendor(ipfsHash, address) {
  const instance = await interacts.getVendorContractInstance();

  const txReceipt = await instance.methods.addVendor(ipfsHash).send({from: address});
  return txReceipt;
}

module.exports.addVendor = addVendor;
