import { 
    ROOT, 
    ETH_CONNECT 
} from '../reducers/types';
import Eth from 'ethjs';

export const changeRootMsg = () => (dispatch) => dispatch({ type: ROOT, payload: 'redux works with actions' });

export const connectEth = () => (dispatch) => {
    var eth;
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
        // eth = new Eth(window.web3.currentProvider);
        eth = new Eth(new Eth.HttpProvider('http://localhost:8545'));
    } else {
        eth = new Eth(new Eth.HttpProvider('http://localhost:8545'));
    }
    console.log(eth)
    return dispatch({ type: ETH_CONNECT, payload: eth});
}
