const sendEthButton = document.querySelector('.sendEthButton');

sendEthButton.addEventListener('click', () => {
  var petName = document.getElementById('nameInputField').value;
  if (petName !== "") {
    ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
      {
        from: accounts[0],
        to: '0x1b7e35ee9fAF386A0ae40685c8a2EC3f51ddFb32',
        data: contract.methods.mint(accounts[0], document.getElementById('cidInputField').value, petName).encodeABI(),
        gasPrice: '3B9ACA00'
      },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
  } else {
    alert("You need to name your pet!");
  }
});
