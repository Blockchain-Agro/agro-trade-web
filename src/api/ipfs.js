const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const getIpfsHash = async (data) => {
  const buffer = Buffer.from(JSON.stringify(data));
  const ipfsData = await ipfs.add(buffer);

  console.log('ipfsHash of data :-', ipfsData[0].hash);

  const ipfsHash = ipfsData[0].hash;
  Promise.resolve(ipfsData);
  return ipfsHash;
}

module.exports.getIpfsHash = getIpfsHash;
