ethereum.on('accountsChanged', function (accounts) {
	document.getElementById('contractBalanceInput').value = ethereum.selectedAddress;
	document.getElementById('btn-disconnect').innerHTML = ethereum.selectedAddress;

	if (ethereum.selectedAddress === null) {
	document.getElementById('btn-connect').style = 'display: block';
	document.getElementById('connected').style = 'display: none';
	}
});
