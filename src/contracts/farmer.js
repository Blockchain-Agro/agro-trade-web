// const web3 = require('./web');
const Utils = require('./utils');

const interacts = require('./interacts/interacts');

async function addFarmer(ipfsHash) {
  const address = await Utils.getAccountForFarmer();
  const instance = await interacts.getFarmerContractInstance();

  await instance.methods.addFarmer(ipfsHash).send({from: address});
}

async function getFarmer() {
  const address = await Utils.getAccountForFarmer();
  const instance = await interacts.getFarmerContractInstance();
  const data = await instance.methods.getFarmer(address).call();
  console.log('hi', data);
}

addFarmer('0x64EC88CA00B268E5BA1A35678A1B5316D212F4F366B2477232534A8AECA37F3C');

getFarmer();
module.exports.addFarmer = getFarmer;
