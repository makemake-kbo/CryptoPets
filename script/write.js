const sendEthButton = document.querySelector('.sendEthButton');

sendEthButton.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x1b7e35ee9fAF386A0ae40685c8a2EC3f51ddFb32',
          data: contract.methods.mint(accounts[0], 'a', 'a').encodeABI(),
          gasPrice: '3B9ACA00'
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});
