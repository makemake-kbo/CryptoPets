let web3 = new Web3(Web3.givenProvider);
web3 = new Web3(new Web3.providers.HttpProvider("https://xdai.poanetwork.dev"));
var contract;
function initializeContract() {
	contract = new web3.eth.Contract([
	{
		"inputs": [
		{
			"internalType": "string",
			"name": "_name",
			"type": "string"
		},
		{
			"internalType": "string",
			"name": "_symbol",
			"type": "string"
		}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "owner",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "approved",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "uint256",
			"name": "tokenId",
			"type": "uint256"
		}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "owner",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "operator",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "bool",
			"name": "approved",
			"type": "bool"
		}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "to",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "tokenId",
			"type": "uint256"
		}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "_to",
			"type": "address"
		},
		{
			"internalType": "string",
			"name": "tokenURI_",
			"type": "string"
		},
		{
			"internalType": "string",
			"name": "_petName",
			"type": "string"
		}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "previousOwner",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "from",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "to",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "tokenId",
			"type": "uint256"
		}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "from",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "to",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "tokenId",
			"type": "uint256"
		},
		{
			"internalType": "bytes",
			"name": "_data",
			"type": "bytes"
		}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "operator",
			"type": "address"
		},
		{
			"internalType": "bool",
			"name": "approved",
			"type": "bool"
		}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "string",
			"name": "baseURI_",
			"type": "string"
		}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
		{
			"indexed": true,
			"internalType": "address",
			"name": "from",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "to",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "uint256",
			"name": "tokenId",
			"type": "uint256"
		}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "from",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "to",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "tokenId",
			"type": "uint256"
		}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		}
		],
		"name": "balanceOf",
		"outputs": [
		{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "uint256",
			"name": "tokenId",
			"type": "uint256"
		}
		],
		"name": "getApproved",
		"outputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "operator",
			"type": "address"
		}
		],
		"name": "isApprovedForAll",
		"outputs": [
		{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
		{
			"internalType": "string",
			"name": "",
			"type": "string"
		}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "uint256",
			"name": "tokenId",
			"type": "uint256"
		}
		],
		"name": "ownerOf",
		"outputs": [
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "bytes4",
			"name": "interfaceId",
			"type": "bytes4"
		}
		],
		"name": "supportsInterface",
		"outputs": [
		{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
		{
			"internalType": "string",
			"name": "",
			"type": "string"
		}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
		{
			"internalType": "uint256",
			"name": "tokenId",
			"type": "uint256"
		}
		],
		"name": "tokenURI",
		"outputs": [
		{
			"internalType": "string",
			"name": "",
			"type": "string"
		}
		],
		"stateMutability": "view",
		"type": "function"
	}
], '0xeDDa603E9Cb16fD960CFD8890c866faD306C0299'); //0x3BF22716eaC27e6b77ed7B3Eae75E63BA739063b
contract.methods.name().call((err, result) => { console.log('Contract loaded: ' + result) });
}

const ethEnabled = () => {
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		window.ethereum.enable();
		switchButtonToWalletState();
		return true;
	}
	return false;
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

