p1 = document.getElementById("p1");
function getContractName() {
	var contractName = document.createElement('p');
	
	contract.methods.name().call((err, result) => { contractName.innerHTML = result });
	p1.appendChild(contractName);
}

function getContractOwner() {
	var contractOwner = document.createElement('p');
	
	contract.methods.owner().call((err, result) => { contractOwner.innerHTML = result });
	p1.appendChild(contractOwner);
}

function getTokenBalance() {
	var addressBalance = document.createElement('p');
	
	contract.methods.balanceOf(document.getElementById("contractBalanceInput").value).call((err, result) => { addressBalance.innerHTML = result });
	p1.appendChild(addressBalance);
}

function getTokenName(tokenId) {
	cardName = document.getElementById("cardName");
	cardId = document.getElementById("cardId");
	cardId.innerHTML = tokenId;
	contract.methods.viewPetName(tokenId).call((err, result) => { cardName.innerHTML = result });
}

function fetchTokenUri(tokenId) {
	let tokenUri;
	contract.methods.tokenURI(tokenId).call((err, result) => { tokenUri = result });
	return tokenUri;
}

function readButton() {
	getTokenName(document.getElementById("tokenIdInput").value);

	if ((document.getElementById("contractBalanceInput").value) === null || (document.getElementById("tokenIdInput").value) === null) {
		document.getElementById("cardInfo").style = 'display: none';
	} else {
		document.getElementById("cardInfo").style = 'display: block';
		console.log('successfully displayed card')
	}
	return true;
}
