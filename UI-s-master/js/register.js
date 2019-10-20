//var Chart = require('chart.js');
// Define a service provider, i.e. connect to the blockchain via web3
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    console.log("web3.currentProvider");
}
else {
    // set the provider you want
    //console.log("http://0.215.199.18:8545"); // was http://localhost:8545
    //web3 = new Web3(new Web3.providers.HttpProvider("http://0.215.199.18:8545"));
    console.log("http://localhost:8545"); // was http://localhost:8545
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// Check if Metamask has been Enjected
if (window.web3.currentProvider.isMetaMask) {
    console.log("MetaMask has been injected");
}
else {
    console.log("MetaMask has not been injected");
}

//------------

// The contract's ABI
var abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_degree_description",
        "outputs": [
            {
                "name": "",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_license_expiryDate",
        "outputs": [
            {
                "name": "",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "new_admin",
                "type": "address"
            }
        ],
        "name": "add_admin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "degree_indx",
                "type": "uint256"
            },
            {
                "name": "verifier_indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_license_preferred_verifier",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "valid_organizations",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "res",
                "type": "bool"
            },
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "validate_degree",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            }
        ],
        "name": "register_client",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "degree_",
                "type": "bytes"
            },
            {
                "name": "description_",
                "type": "bytes"
            },
            {
                "name": "verifiers",
                "type": "address[]"
            }
        ],
        "name": "insert_degree",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_degree_num_of_preferred_verifiers",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_age_preferred_verifier",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "valid_validators",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_license_number_of_verifications",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_degree_type",
        "outputs": [
            {
                "name": "",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "validator",
                "type": "address"
            }
        ],
        "name": "register_validator",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_license_type",
        "outputs": [
            {
                "name": "",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "res",
                "type": "bool"
            },
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "validate_license",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "license_indx",
                "type": "uint256"
            },
            {
                "name": "verifier_indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_license_verification_res",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_license_description",
        "outputs": [
            {
                "name": "",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            }
        ],
        "name": "get_client_age_total_number_of_verifications",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "degree_indx",
                "type": "uint256"
            },
            {
                "name": "verifier_indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_degree_preferred_verifier",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "license_",
                "type": "bytes"
            },
            {
                "name": "description",
                "type": "bytes"
            },
            {
                "name": "expiry_date",
                "type": "bytes"
            },
            {
                "name": "verifiers",
                "type": "address[]"
            }
        ],
        "name": "insert_license",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "res",
                "type": "bool"
            }
        ],
        "name": "validate_age",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_degree_number_of_verifications",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_age_verification_res",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "valid_clients",
        "outputs": [
            {
                "name": "total_number_of_degrees",
                "type": "uint256"
            },
            {
                "name": "total_number_of_licenses",
                "type": "uint256"
            },
            {
                "name": "valid",
                "type": "bool"
            },
            {
                "name": "proof_of_attributes_ownership",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "val",
                "type": "bytes"
            }
        ],
        "name": "prove_attributes_ownership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "com_val_",
                "type": "bytes"
            },
            {
                "name": "verifiers",
                "type": "address[]"
            }
        ],
        "name": "insert_age",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            }
        ],
        "name": "get_client_age_num_of_preferred_verifiers",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "degree_indx",
                "type": "uint256"
            },
            {
                "name": "verifier_indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_degree_verification_res",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "get_client_license_num_of_preferred_verifiers",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            }
        ],
        "name": "get_client_age_val",
        "outputs": [
            {
                "name": "",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]


var ins = web3.eth.contract(abi);
var myContract = ins.at("0x0cef48c836bcb893edb73214a9eabf33902c465c");// keyaddress


function register_client() {
    console.log("register_client() was called")
    var client_addr = document.getElementById("client_address").value;
    if (client_addr == '') {
        document.getElementById("regaddrres").innerHTML = "All fields must be filled in!";
        return;
    }

    myContract.valid_clients.call(client_addr, function (error, result) {
        // alert(result[2]);
        if (error) {
            alert("Error: Was not able to retrieve details of your account")
            console.log(error)
        }
        else {
            if (result[2]) {
                document.getElementById("regaddrres").innerHTML = "That address has already been assigned.";
            } else {
                myContract.register_client(client_addr, {
                    from: "0x81fA88Ac87194eb2636b9463da4551981b778bB5",
                    gas: 4200000
                }, function (error, result) {
                    if (error) {
                        alert("Error: Transaction has not been sent")
                        console.log(error)
                    }
                    else {
                        console.log("Student address registered at " + result)
                        document.getElementById("regaddrres").innerHTML = "Client's address, " + client_addr + ", is now registered with InVICTUS!";
                    }
                })
            }
        }


    })
}
function register_validator() {
    console.log("register_validator() was called")
    var validator_addr = document.getElementById("validator_address").value;
    if (validator_addr == '') {
        document.getElementById("valaddrres").innerHTML = "All fields must be filled in!";
        return;
    }

    myContract.valid_validators.call(validator_addr, function (error, result) {
        // alert(result[2]);
        if (error) {
            alert("Error: Was not able to retrieve details of your account")
            console.log(error)
        }
        else {
            if (result[2]) {
                document.getElementById("valaddress").innerHTML = "That address has already been assigned.";
            } else {
                myContract.register_validator(validator_addr, {
                    from: "0x81fA88Ac87194eb2636b9463da4551981b778bB5",
                    gas: 4200000
                }, function (error, result) {
                    if (error) {
                        alert("Error: Transaction has not been sent")
                        console.log(error)
                    }
                    else {
                        console.log("Student address registered at " + result)
                        document.getElementById("valaddrres").innerHTML = "Client's address, " + validator_addr + ", is now registered with InVICTUS!";
                    }
                })
            }
        }


    })
}
function add_admin() {
    console.log("add_admin() was called")
    var admin_addr = document.getElementById("admin_address").value;
    if (admin_addr == '') {
        document.getElementById("admaddrres").innerHTML = "All fields must be filled in!";
        return;
    }

    myContract.valid_organizations.call(admin_addr, function (error, result) {
        // alert(result[2]);
        if (error) {
            alert("Error: Was not able to retrieve details of your account")
            console.log(error)
        }
        else {
            if (result[2]) {
                document.getElementById("admaddrres").innerHTML = "That address has already been assigned.";
            } else {
                myContract.add_admin(admin_addr, {
                    from: "0x81fA88Ac87194eb2636b9463da4551981b778bB5",
                    gas: 4200000
                }, function (error, result) {
                    if (error) {
                        alert("Error: Transaction has not been sent")
                        console.log(error)
                    }
                    else {
                        console.log("Student address registered at " + result)
                        document.getElementById("admaddrres").innerHTML = "Client's address, " + admin_addr + ", is now registered with InVICTUS!";
                    }
                })
            }
        }


    })
}
function hideLayer(id){
    var obj = document.getElementById(id);
    obj.style.display = "none";
}
// function register_std_addr(){
//     console.log("register_std_addr() was called")
//     var stud_num = document.getElementById("stud_num2").value;
//     var stud_addr = document.getElementById("stud_addr").value;
//     if(stud_num == '' || stud_addr == '') {
//         document.getElementById("regaddrres").innerHTML = "All fields must be filled in!";
//         return;
//     }
//     myContract.valid_student_num.call(stud_num, function(error,result){
//         if(error) {
//             alert("Error: Was not able to retrieve details of your account")
//             console.log(error)
//         }
//         else {
//             console.log(result)
//             if(!result[0]) {
//                 document.getElementById("regaddrres").innerHTML = "That student number is not registered.";
//                 return;
//             }
//             if(result[1]) {
//                 document.getElementById("regaddrres").innerHTML = "That student number already has an address assigned.";
//                 return;
//             }
//             myContract.valid_student_addr.call(stud_addr, function(error,result){
//                 if(error) {
//                     alert("Error: Was not able to retrieve details of your account")
//                     console.log(error)
//                 }
//                 else {
//                     if(result){
//                         document.getElementById("regaddrres").innerHTML = "That address has already been assigned.";
//                     }
//                     else{
//                         myContract.register_std_addr(stud_addr, stud_num, {from:user.account , gas:4200000},function(error,result){
//                             if(error) {
//                                 alert("Error: Transaction has not been sent")
//                                 console.log(error)
//                             }
//                             else {
//                                 console.log("Student address registered at " + result)
//                                 document.getElementById("regaddrres").innerHTML = "Student " + stud_num + "'s address, " + stud_addr + ", is now registered with InVICTUS!";
//                             }
//                         })
//                     }
//                 }
//             })
//         }
//     })
// }

