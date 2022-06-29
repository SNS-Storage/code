

function convertToGB(val) {
    let bytesValue = val;
    let gbValue = (bytesValue / (1024 * 1024 * 1024)).toFixed(2);
    return gbValue;
}


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var data;
let usedSize;
let freeSize; 


readTextFile("./data.json", function(text){
  // console.log("debug",data);
    data = JSON.parse(text);
    for(let i=0; i<3;i++){
        usedSize=convertToGB(data.node[i].Used);
        freeSize=convertToGB(data.node[i].Free);
        let totalSize = convertToGB(data.node[i].Used + data.node[i].Free); 
        document.getElementById(`total${i}`).innerHTML = totalSize + " GB" ;
        document.getElementById(`used${i}`).innerHTML = usedSize + " GB" ;
        document.getElementById(`free${i}`).innerHTML = freeSize + " GB";
        document.getElementById(`price${i}`).innerHTML = usedSize/1000000;  
        // console.log(data);
    }
    
});

setTimeout(function(){
  window.location.reload(1);
}, 5000);


// function calculatePayment() {
//     document.getElementById("price").innerHTML = usedSize/1000000;  
// }




// import Web3 from "web3";

// let config = {
//     contract: {
//         address: "0x32322262f64B75564b0d0c4590F0B383779E3bcc",
//         abi: [
//             {
//               "inputs": [],
//               "stateMutability": "payable",
//               "type": "constructor"
//             },
//             {
//               "anonymous": false,
//               "inputs": [
//                 {
//                   "indexed": true,
//                   "internalType": "address",
//                   "name": "oldOwner",
//                   "type": "address"
//                 },
//                 {
//                   "indexed": true,
//                   "internalType": "address",
//                   "name": "newOwner",
//                   "type": "address"
//                 }
//               ],
//               "name": "OwnerSet",
//               "type": "event"
//             },
//             {
//               "inputs": [
//                 {
//                   "internalType": "address",
//                   "name": "newOwner",
//                   "type": "address"
//                 }
//               ],
//               "name": "changeOwner",
//               "outputs": [],
//               "stateMutability": "nonpayable",
//               "type": "function"
//             },
//             {
//               "inputs": [],
//               "name": "charge",
//               "outputs": [],
//               "stateMutability": "payable",
//               "type": "function"
//             },
//             {
//               "inputs": [],
//               "name": "getOwner",
//               "outputs": [
//                 {
//                   "internalType": "address",
//                   "name": "",
//                   "type": "address"
//                 }
//               ],
//               "stateMutability": "view",
//               "type": "function"
//             },
//             {
//               "inputs": [
//                 {
//                   "internalType": "address payable[]",
//                   "name": "addrs",
//                   "type": "address[]"
//                 },
//                 {
//                   "internalType": "uint256[]",
//                   "name": "amnts",
//                   "type": "uint256[]"
//                 }
//               ],
//               "name": "withdrawls",
//               "outputs": [],
//               "stateMutability": "payable",
//               "type": "function"
//             }
//           ]
//     },
//     apiKey: {
//         test: "PhVPMwM9Z.0994e269-bb81-4e29-afb4-775e9cf66921",
//         prod: "PhVPMwM9Z.0994e269-bb81-4e29-afb4-775e9cf66921"
//     }
// }

// let  web3, walletWeb3;
// let contract;

//     async function init() {
//         const provider = window["ethereum"];
//         await provider.enable();
//         let rinkebyProvider = new Web3.providers.HttpProvider("https://speedy-nodes-nyc.moralis.io/c1827b98822d8570191b87b1/eth/rinkeby");
//         web3 = new Web3(rinkebyProvider);
//         walletWeb3 = new Web3(window.ethereum);
//         contract = new web3.eth.Contract( config.contract.abi, config.contract.address);
//         setSelectedAddress(provider.selectedAddress);
        
//         console.log(contract)
//     }
//     init();


//     const onSubmit = async event => {
//         console.log("Sending normal transaction");
//         // await sendTx(contract.methods.withdrawls(["0x8A9F57F7c899A23b0951a1a1Dd1F342a322DaCAD","0x5C821562C070813CFCD1dC54A0be6eEFeE5D726b"], [1,2]), '0x95E1269127C7B200d3676B83E4a38D3A0c53B045', '6b637f4bcc4409db444d62b5864036674e6870e5ce3803a0473d13e24ab86f31');
//         console.log('debug')
//         contract.methods
//             .withdrawls(["0x8A9F57F7c899A23b0951a1a1Dd1F342a322DaCAD","0x5C821562C070813CFCD1dC54A0be6eEFeE5D726b"], [1,1])
//             .send({ from: selectedAddress, gasLimit: 100000, value: 2000000000000000000 })
//     };

//     async function sendTx(tran, ethAddress, privateKey, value='3') {
//         var tr = {
//             chainId: await web3.eth.getChainId(),
//             gas: 300000,
//             nonce: await web3.eth.getTransactionCount(ethAddress),
//             value: web3.utils.toWei(value, 'ether'),
//             data: tran.encodeABI()
//         };
    
//         try {
//             tr.gas = await web3.eth.estimateGas({
//                 from: ethAddress
//             });
//         } catch {
//             console.error('Could not estimate gas');
//         }
        
//         var signedTx = await web3.eth.accounts.signTransaction(tr, privateKey);
//         console.log(signedTx);
//     }
   