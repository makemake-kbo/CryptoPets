const CryptoPets = artifacts.require("CryptoPets");

module.exports = function (deployer) {
  deployer.deploy(CryptoPets, "Crypto Pets", "CPET");
};
