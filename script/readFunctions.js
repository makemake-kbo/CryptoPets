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

function readButton() {
	p1.innerHTML = "";
	getContractName();
	getContractOwner();
	getTokenBalance();
}
