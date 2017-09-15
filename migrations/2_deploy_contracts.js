var EnigmaToken = artifacts.require('./EnigmaToken.sol')

module.exports = function (deployer) {
  deployer.deploy(EnigmaToken)
}
