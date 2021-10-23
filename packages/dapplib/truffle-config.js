require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note remember color harvest inflict slot gather'; 
let testAccounts = [
"0x7f346f657faabfd186577c5e4d28085c20d181bd7661820cea670b2a865916e6",
"0x209faa79fe354e5597bed7924e691217e24d42c62b8df8a98b1cffdc65c6ca1a",
"0xec1ca5b9202a9a3cfe862e88ee6c3df620d007f37c9304c6e2230e859c0dd4df",
"0x90ae8a55cc31103b72e506b508aa9997d9d94abb64060506d5e26a006ca6f9e2",
"0x001d32598114bce825b331329c042c6996aa94e886bcbc8b4e88e27f0f1f0436",
"0x5738cd78f695f590603dcecafe62d9b418eec85a5c2b615a21b7b1128a55b5e8",
"0x5342fa25a82a73075164e49208d83915aaa0c65465af3c7c0959d2103d02683c",
"0x2d3e039b90fc596a61932c11f6f5a6018c14eabcff503f84f02c34d154bff1b3",
"0x6af279f2914701d03ff1fa3ffad3435b5d5f387e6c5ed9a8f9847e413bff754d",
"0x8483b6523f4d8b997b6e88a3ed79a94d7b5119934f2d70ce3b8c868fbf5890e1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

