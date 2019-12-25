const Web3 = require('web3');
var provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
const contract = require('truffle-contract');
const communityChestContractABI = require('../../truffleContract/CommunityChest.json');
const studentContract = contract(communityChestContractABI);
studentContract.setProvider(provider);


const getCommunityChestContract = () => {
    return studentContract.deployed().then((instance) => {
        return instance;
    })
    .catch(err =>{
         console.log(err)
        });
} 

module.exports ={
    getCommunityChestContract
}