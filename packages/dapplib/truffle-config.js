require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth meadow cluster include clinic only section'; 
let testAccounts = [
"0xe291504c6b60f88f5bac42a02d0d6eb78d2426ca2b83aa72cd3a0ca4eba547ca",
"0xc63b857203241afa9ae77cd3831ba05a47ee7011f312189951fa34b66c80b25f",
"0x842a4adaed031816055958074bd1c541cd21b847d82e227f24b5c23c124a0088",
"0x1e0c9010108b50e663cb8209d909b583b440296517d16bf5237b3ea00dfa17e3",
"0x8448faaa969fe53f05fbc1b92379dedebd1605da4860e4e58e39db6bd3dbcce3",
"0x9b84c29d5c953bb3836b0f2ff2c77dfab613a0c8388ba36b021daaf50b4500b1",
"0x604df45d9c18353f4ed075f72e542e223965b3e5954b212d85fe1e23d4b99b9f",
"0xc8636bfad1bc2408db643659d9ea8ee6ae76dcf2b04ffabeaa89775fdc2e6e57",
"0x1526e39c0573d8bcddd999eacf59a0bed92f2250b4e7cc835d46f15d0050b36e",
"0x6dce58f09035576dfaa4dda4c5b4bf66eec0b96d180966c745f51278538cd3a9"
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

