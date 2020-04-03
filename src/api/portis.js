import Portis from '@portis/web3';
import Web3 from 'web3';

class PortisClass {
  static async connectPortis() {
    const portis = new Portis('4e5c7a30-2bbf-41db-92fa-0bbe1ae94d9b', 'mainnet');
    const web3 = new Web3(portis.provider);
    const account = await web3.eth.getAccounts();

    console.log('accounts :-', account);
    return account;
  }
}


export default PortisClass;
