import abi from './abi'


let Web3 = require('web3');
export const contract_address = '0xC81d90863966f9a00F162590d0C87b2920e09478';
export const web3 = new Web3(
    window.ethereum ||
    new Web3(
        new Web3.providers.WebsocketProvider(
            'wss://goerli.infura.io/ws/v3/d0ada8090e0c4ef6bd9ae9ad5251a089'
        )
    )
);

if (window.ethereum) window.ethereum.autoRefreshOnNetworkChang = false;

export const smartContract = new web3.eth.Contract(abi, contract_address);


export default smartContract;