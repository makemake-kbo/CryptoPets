let web3 = new Web3(Web3.givenProvider);
web3 = new Web3(new Web3.providers.HttpProvider("https://xdai.poanetwork.dev"));

var contract;
function initializeContract() {
	contract = new web3.eth.Contract(contractABI, contractAddressXdai); //0x1b7e35ee9fAF386A0ae40685c8a2EC3f51ddFb32
contract.methods.name().call((err, result) => { console.log('Contract loaded: ' + result) });
}

let accounts = [];

const ethEnabled = () => {
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		window.ethereum.enable();
		accounts = ethereum.selectedAddress;
		switchButtonToWalletState();
		return true;
	}
	return false;
}

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}

function switchButtonToWalletState() {
	if (ethereum.isConnected()) {
		document.getElementById('btn-connect').style = 'display: none';
		document.getElementById('connected').style = 'display: block';
	} else {
		document.getElementById('btn-connect').style = 'display: block';
		document.getElementById('connected').style = 'display: none';
	}
}

