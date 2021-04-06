function mintToken(destinationAddress, tokenURI, petName) {
	contract.methods.mint(destinationAddress, tokenURI, petName).send({from: ethereum.selectedAddress}, function(error, transactionHash){
		console.warn(error);
		console.log(transactionHash);
		mintResult = document.getElementById("mintResult");
		var txHash = document.createElement('p');
		txHash.innerHTML = transactionHash;
		mintResult.appendChild(txHash);
		mintResult.style.display = 'block';

});

}