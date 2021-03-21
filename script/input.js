//document.getElementById('contractAddressInput').value = '0x62bCc84bEA2c0aD32A5F1aC6842D636B3F2CAE9d';
ethereum.on('accountsChanged', function (accounts) {
	document.getElementById('contractBalanceInput').value = ethereum.selectedAddress;
	document.getElementById('btn-disconnect').innerHTML = ethereum.selectedAddress;

	if (ethereum.selectedAddress === null) {
	document.getElementById('btn-connect').style = 'display: block';
	document.getElementById('connected').style = 'display: none';
	}
});
