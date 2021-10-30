require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
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
    solidity: {
        settings: {
            optimizer: {
                enabled: true,
                runs: 1,
            }
        },
        compilers: [
            {
                version: "0.4.18",
            },
            {
                version: "0.5.16",
            },
            {
                version: "0.6.12",
            },
            {
                version: "0.6.6",
            },
            {
                version: "0.5.0",
            },
            {
                version: "0.6.2",
            },
            {
                version: "0.8.0",
            },
            {
                version: "0.8.7",
            },
            {
                version: "0.8.3",
            }
        ],
    },
    networks: {
        eth_testnet: {
            url: process.env.ENDPOINT_ETH,
            accounts: ['0x' + process.env.PRIVATE_KEY],
        },
        eth_ropsten_testnet: {
            url: process.env.ENDPOINT_TESTNET_ROPSTEN_ETH,
            accounts: ['0x' + process.env.PRIVATE_KEY],
            gas: 2000000,   // <--- Twice as much
            gasPrice: 10000000000,
        },
        hardhat: {
            allowUnlimitedContractSize: true,
            forking: {
                url: process.env.ENDPOINT_MAINNET_ETH,
                gas: "90022680",
            },
        },
        bsc_testnet: {
            url: process.env.ENDPOINT_TESTNET_BSC,
            accounts: ['0x' + process.env.PRIVATE_KEY]
        },
        bsc_mainnet: {
            url: process.env.ENDPOINT_MAINNET_BSC,
            accounts: ['0x' + process.env.PRIVATE_KEY]
        },
        node: {
            url: 'http://127.0.0.1:8545/',
            gas: 2000000,   // <--- Twice as much
            gasPrice: 10000000000,
            accounts: []
        },
    },
    etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
        apiKey: ""
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD",
    }
};
