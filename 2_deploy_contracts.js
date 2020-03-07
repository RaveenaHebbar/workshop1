const raveenaCoin = artifacts.require("raveenaCoin");

module.exports = function(deployer) {
  deployer.deploy(raveenaCoin);
};
