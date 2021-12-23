const HDWalletProvider = require('truffle-hdwallet-provider');
//const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "eef0ab28bb304a91a4c2ae5ac27242d3";
//
const fs = require('fs');
const mnemonic = "cloth strong lawn cake brisk finish dinner spike strong setup tornado genuine";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`,
                                          //address_index = 1
                                          ),
        network_id: 3,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`,
                                          //address_index = 1
                                          ),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    }

  }
};


