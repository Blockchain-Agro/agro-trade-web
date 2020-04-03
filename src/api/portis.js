import Portis from '@portis/web3';
import Web3 from 'web3';

class PortisClass {
  static async connectPortis() {
    const portis = new Portis('4e5c7a30-2bbf-41db-92fa-0bbe1ae94d9b', 'ropsten');
    const web3 = new Web3(portis.provider);
    const account = await web3.eth.getAccounts();

    const address = account.toString();
    console.log('accounts :-', account.toString());
    return address;
  }
}


export default PortisClass;
