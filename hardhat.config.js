
require("@nomiclabs/hardhat-ganache");
require("@nomicfoundation/hardhat-toolbox");



// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

// const INFURA_URL='https://rinkeby.infura.io/v3/21546b9988bc4f3cb85bce0bffda1e54';
// const PRIVATE_KEY='f0651e20c967bbd595aab258fecf53342f569e1c399cef6b59fd2b39c20050b8';
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }

});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './client/src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    // rinkeby: {
    //   url: "https://rinkeby.infura.io/v3/21546b9988bc4f3cb85bce0bffda1e54",
    //   accounts: ['0xf0651e20c967bbd595aab258fecf53342f569e1c399cef6b59fd2b39c20050b8']
    // }
  }
};
