var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    console.log("web3.currentProvider");
}
else {
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
var abi =[
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
                "name": "indx",
                "type": "uint256"
            }
        ],
        "name": "pay_age_validator",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
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
        "constant": false,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "res",
                "type": "bytes32"
            }
        ],
        "name": "validate_age",
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
                "type": "bytes32"
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
            },
            {
                "name": "res",
                "type": "bytes32"
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
        "constant": false,
        "inputs": [
            {
                "name": "client",
                "type": "address"
            },
            {
                "name": "verifier",
                "type": "address"
            },
            {
                "name": "r",
                "type": "bytes"
            },
            {
                "name": "m",
                "type": "string"
            }
        ],
        "name": "verify_age_commitment",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
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
        "name": "get_client_age_howmany_getsPaid",
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
                "type": "bytes32"
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
            },
            {
                "name": "counter",
                "type": "uint256"
            }
        ],
        "name": "get_client_age_whoElse_getsPaid",
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
                "type": "bytes32"
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
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "initial_verification_cost",
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
        "inputs": [],
        "name": "ratio",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "validator_with_inconsistent_res",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
var ins = web3.eth.contract(abi);
// 0x3cb229172d346826e7bd1b725a148e91e287a3a3
var myContract = ins.at("0xa010ddd030b3c14d7fe7a3f54917232580f45752");// keyaddress
const status_txt = {
    "NA": "Your account is not registered with the Value Creation and " +
        "Trading scheme. If you are a client, or think you should be an " +
        "admin, please email your Ethereum address to" +
        " <a href='mailto:invictus.help@inf.ed.ac.uk'>invictus.help@inf.ed.ac.uk</a>.</p>",
    "CL": "Your status is: CLIENT",
    "AD": "Your status is ADMIN",
    "OW": "Your status is OWNER",
    "VD": "Your status is VALIDATOR"
}

var user = {
    "account": web3.eth.coinbase,
    "account_ch": false,
    "status": "XX",
    "status_ch": false,
    "balance": null,
    "balance_ch": false,
    "totaltr": null,
    "totaltr_ch": false,
    "rep": null,
    "rep_ch": false,
    "trans_hist": [],
    "offer_list": [],
    "offer_count": 0,
    "sender_fbk_ch": [],
    "receiver_fbk_ch": [],
    "lec_no": 0,
    "lec_value": 0
}
// window.onload= function(){
//     alert(user.account);
// }
function register_client() {
    // alert("11111");
    // alert(user.account);

    console.log(user.account);
    console.log("register_client() was called");
    var client_addr = document.getElementById("client_address").value;
    if (client_addr == '') {
        document.getElementById("regaddrres").innerHTML = "All fields must be filled in!";
        return;
    }

    myContract.valid_clients.call(client_addr, function (error, result) {
        // alert(result[2]);
        // if (error) {
        //     alert("Error: Was not able to retrieve details of your account")
        //     console.log(error)
        // }
        // else {
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
        // }


    })
    // window.open("main/index.html")
}


function insert_age() {

    var array = new Uint32Array(2);
    // generate two random value then convert them to hex, then combine the two hex
    window.crypto.getRandomValues(array);
    var arr1 = array[0].toString(16);
    var arr2 = array[1].toString(16);
    // alert("arr1:"+arr1);
    // alert("arr2:"+arr2);
    var arr3 = arr1.concat(arr2);

    var age = document.getElementById("age").value;
    // change age to hex
    var conbage = arr3.concat(age.toString(16));
    // alert(conbage);
    // hash value of age
    var hashage = (Web3.prototype.sha3(conbage));
    // alert(hashage);

    //address of validators
    var numArr = []; // empty array
    // var txt = $('.address1').find(':text');
    // for (var i = 0; i < txt.length; i++) {
    //     numArr.push(txt.eq(i).val()); // add values from text input to the array
    // }
    var txt = document.getElementsByName("address1");
    for(var i=0;i<txt.length;i++){
        numArr.push(txt[i].value);
    }
    alert(numArr);
    if (!age) {
        document.getElementById("ageval").innerHTML = "All fields must be filled in!";
    }

    myContract.insert_age(hashage,numArr, {
        from: user.account,
        gas: 4200000
    }, function (error, result) {
        if (error) {
            alert("Error: Was not able to insert the invalid age")
            console.log(error)
        }
        else {
            document.getElementById("ageval").innerHTML = "The current age is " + hashage + "."
        }
    })
}

function insert_degree() {
    var array = new Uint32Array(2);
    // generate two random value then convert them to hex, then combine the two hex
    window.crypto.getRandomValues(array);
    var arr1 = array[0].toString(16);
    var arr2 = array[1].toString(16);

    var arr3 = arr1.concat(arr2);
    var degree = document.getElementById("degree").value;

    var condegree = arr3.concat(age.toString(16))
    // change degree to hex
    // var hexdegree = degree.toString(16);
    // hash
    var hashdegree = (Web3.prototype.sha3(condegree));
    // var address = document.getElementById("degree_address").value;
    var description = document.getElementById("description").value;
    // chage description to hex
    var hexdescription = description.toString(16);
    var hashdescription = (Web3.prototype.sha3(hexdescription));

    var val_err = "The lecture number must be a positive whole number";
    var numArr = [];
    var txt = document.getElementsByName("address2");
    for (var i = 0; i < txt.length; i++) {
        numArr.push(txt[i].value);
    }
    alert(numArr);
    if (!degree) {
        document.getElementById("degreeval").innerHTML = "All fields must be filled in!";
    }

    myContract.insert_degree(hashdegree, hashdescription, numArr, {
        from: user.account,
        gas: 4200000
    }, function (error, result) {
        if (error) {
            alert("Error: Was not able to insert the invalid degree")
            console.log(error)
        }
        else {
            document.getElementById("degreeval").innerHTML = "The current degree is " + degree + "."
        }
    })

}

function insert_license() {
    var array = new Uint32Array(2);
    // generate two random value then convert them to hex, then combine the two hex
    window.crypto.getRandomValues(array);
    var arr1 = array[0].toString(16);
    var arr2 = array[1].toString(16);

    var arr3 = arr1.concat(arr2);
    var license = document.getElementById("license").value;

    var conlicense = arr3.concat(license.toString(16))
    // var hexlicense = license.toString(16);
    var hashlicense = (Web3.prototype.sha3(conlicense));
    var val_err = "The lecture number must be a positive whole number";

    // var address = document.getElementById("client_address").value;
    var description2 = document.getElementById("description2").value;
    var hexdescription2 = description2.toString(16);
    var hashdescription2 = (Web3.prototype.sha3(hexdescription2));
    var date = document.getElementById("desdate").value;
    // alert(date);
    var hexdate = date.toString(16);
    var hashdate = (Web3.prototype.sha3(hexdate));

    alert(hashdate);
    var numArr = [];
    var txt = document.getElementsByName("address3");
    for (var i = 0; i < txt.length; i++) {
        numArr.push(txt[i].value);
    }
    alert(numArr);
    if (!license) {
        document.getElementById("licenseval").innerHTML = "All fields must be filled in!";
    }
    myContract.insert_license(hashlicense, hashdescription2, hashdate, numArr, {
        from: user.account,
        gas: 4200000
    }, function (error, result) {
        if (error) {
            alert("Error: Was not able to insert the invalid degree")
            console.log(error)
        }
        else {
            document.getElementById("licenseval").innerHTML = "The current license is " + license + "."
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
            // if (result) {
            //     document.getElementById("valaddress").innerHTML = "That address has already been assigned.";
            // } else {
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
    })
}

function add_admin() {
    // Take inputs from the form
    var new_admin = document.getElementById("admin_address").value;
    // Before sending values to the smart contract, let's see if they make sense.
    // There are some checks (if the sender has enough funds, if the recipient
    // exists) which can only be done by the contract, but these can be done locally
    console.log(admin_address + " to be adminified!");
    if (admin_address === '') {
        document.getElementById("confirm_admin").innerHTML = "Error: All fields must be filled in!";
        return;
    }
    // if(!is_address(admin_address)){
    //     document.getElementById("admaddrres").innerHTML = "Error: That is not a valid address.<br>Addresses are 160-bit hexadecimal numbers; they begin with '0x' followed by 40 hexadecimal digits. A hexadecimal digit can be represented as a numeral 0-9, or a letter a-f (repressenting 10-15)";
    //     return;
    // }

    myContract.owner.call(function (error, result) {
        // call the owner and get the address then compare with the user.account
        if (error) {
            alert("Error: Was not able to communicate with contract :(")
            console.log(error);
            alert(error)
        }
        else {
            if (!same_addr(result, user.account)) {
                document.getElementById("admaddrres").innerHTML = "Error: Only the Contract Owner can add and remove admins.";
                alert("Error: not allowed")
            }
            else {
                // if (!same_addr(result, user.account)) {
                //     document.getElementById("confirm_admin").innerHTML = "Error: Only the Contract Owner can add and remove admins.";
                //     alert("Error: not allowed")
                // }
                // else{
                myContract.add_admin(new_admin, {from: user.account, gas: 4200000}, function (error, result) {
                    console.log("myContract.add_admin has been called");
                    if (error) {
                        alert(error)
                        console.log(error)
                    }
                    else {
                        document.getElementById("admaddrres").innerHTML = new_admin + " is now an Admin";
                    }
                })
            }
        }
    })
}

function validate_age() {
    var address = document.getElementById("clientadd").value;
    var validAddress = getValue();
    var array = new Uint32Array(2);
    // generate two random value then convert them to hex, then combine the two hex
    window.crypto.getRandomValues(array);
    var arr1 = array[0].toString(16);
    var arr2 = array[1].toString(16);
    // alert("arr1:"+arr1);
    // alert("arr2:"+arr2);
    var arr3 = arr1.concat(arr2);

    var age = document.getElementById("age").value;
    // change address to hex
    var conbaddress = arr3.concat(validAddress.toString(16));
    // alert(conbage);
    // hash value of age
    var hashaddress = (Web3.prototype.sha3(conbaddress));
    // alert(hashage);
    // alert(byteValidAddress);

    myContract.validate_age(address, hashaddress, {
        from: user.account,
        gas: 4200000
    }, function (error, result) {
        alert(user.account);
        if (error) {
            alert("Error: Was not able to validate the age")
            console.log(error)
        }
        else {
            document.getElementById("ageval2").innerHTML = "The current age is valid."
        }
    })



}

function getValue() {
    var radio = document.getElementsByName("val");
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }

    }
}
function getValue2(){
    var radio = document.getElementsByName("val2");
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }

    }
}
function validate_degree() {
    var myselect=document.getElementById("val2");
    var address = document.getElementById("clientadd2").value;
    var validAddress = getValue2();
    var array = new Uint32Array(2);
    // generate two random value then convert them to hex, then combine the two hex
    window.crypto.getRandomValues(array);
    var arr1 = array[0].toString(16);
    var arr2 = array[1].toString(16);
    // alert("arr1:"+arr1);
    // alert("arr2:"+arr2);
    var arr3 = arr1.concat(arr2);

    var age = document.getElementById("age").value;
    // change address to hex
    var conbaddress = arr3.concat(validAddress.toString(16));
    // alert(conbage);
    // hash value of age
    var hashdegree = (Web3.prototype.sha3(conbaddress));
    // alert(hashage);
    // alert(byteValidAddress);
    // var index=myselect.selectedIndex;
    var index = document.getElementById("indexdeg").value;
    alert(index);
    myContract.validate_degree(address, hashdegree, index, {
        from: user.account,
        gas: 4200000
    }, function (error, result) {
        if (error) {
            alert("Error: Was not able to invalid the degree");
            console.log(error)
        }
        else {
            document.getElementById("degreeval2").innerHTML = "The current degree" +hashdegree+"is valid."
        }
    })

}
// function generate_degree(){
//     var arrayDegree = new Array('Bsc','Msc','Phd');
//
//     function createSelect(name, str){
//         var _select = document.createElement("select");
//         var firstOption = document.createElement("option");
//         firstOption.value = "------select------";
//         firstOption.text = "------请选择------";
//         _select.appendChild(firstOption);
//         for ( i = 0; i < str.length; i++){
//             var _option = document.createElement("option");
//             _option.value = str[i];
//             _option.text = str[i];
//             if (name == str[i]){
//                 _option.selected = "true";
//             }
//             _select.appendChild(_option);
//         }
//         return _select;
//     }
// }
function getValue3(){
    var radio = document.getElementsByName("val3");
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }

    }
}
function validate_license() {
    // var myselect=document.getElementById("val3");
    var address = document.getElementById("clientadd3").value;
    var validAddress = getValue3();
    var array = new Uint32Array(2);
    // generate two random value then convert them to hex, then combine the two hex
    window.crypto.getRandomValues(array);
    var arr1 = array[0].toString(16);
    var arr2 = array[1].toString(16);
    // alert("arr1:"+arr1);
    // alert("arr2:"+arr2);
    var arr3 = arr1.concat(arr2);

    // var age = document.getElementById("age").value;
    // change address to hex
    var conbaddress = arr3.concat(validAddress.toString(16));
    // alert(conbage);
    // hash value of age
    var hashlicense = (Web3.prototype.sha3(conbaddress));
    // alert(hashage);
    // alert(byteValidAddress);
    var index = document.getElementById("indexlis").value;

    myContract.validate_license(address, hashlicense, index, {
        from: user.account,
        gas: 4200000
    }, function (error, result) {
        if (error) {
            alert("Error: Was not able to invalid the license");
            console.log(error)
        }
        else {
            document.getElementById("licenseval2").innerHTML = "The current license is valid."
        }
    })

}


function same_addr(addr1, addr2) {
    // alert(addr1.toUpperCase() == addr2.toUpperCase());
    if (addr1 && addr2) {
        return addr1.toUpperCase() == addr2.toUpperCase();
    }
    return false;
}

//     }
// })
// }
function is_address(str) {
    var re = new RegExp('^0(x|X)[0-9a-fA-F]{40}$');
    return re.test(str);
}

function register_owner() {

}

function openView(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    if (typeof evt == 'string') {
        document.getElementById(evt).className += " active"
    }
    else {
        evt.currentTarget.className += " active";
    }
}


function pay_validator(){
    var address = document.getElementById("payval").value;
    var index = document.getElementById("valindex").value;
    myContract.pay_age_validator(address, index, {
        from: user.account,
        gas: 4200000
    },function (error, result) {
        if (error) {
            alert("Error: Was not able to pay the validator");
            console.log(error)
        }
        else {
            document.getElementById("payvalidator").innerHTML = "Payment sent!"
        }
    })
}
function verify_commitment(){
    var clientaddress = document.getElementById("clicom").value;
    var veraddress = document.getElementById("vercom").value;
    var s = getValue4();
    var array = new Uint32Array(2);
    // generate two random value then convert them to hex, then combine the two hex
    window.crypto.getRandomValues(array);
    var arr1 = array[0].toString(16);
    var arr2 = array[1].toString(16);
    var arr3 = arr1.concat(arr2);
    // change to hex
    var r = arr3.concat(s.toString(16));
    var hashr = (Web3.prototype.sha3(r));
    //s? or s.toString(16)?
    myContract.pay_age_validator(clientaddress, veraddress, hashr, s, {
        from: user.account,
        gas: 4200000
    }, function (error, result) {
        if (error) {
            alert("Error: Was not able to verify the commitment")
            console.log(error)
        }
        else {
            document.getElementById("varsus").innerHTML = "Commitment verified."
        }
    })
}
function getValue4(){
    var radio = document.getElementsByName("com");
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }

    }
}
function proveAttributeOwnership(){
    var s = document.getElementById("proveattr");
    var array = new Uint32Array(2);
    // generate two random value then convert them to hex, then combine the two hex
    window.crypto.getRandomValues(array);
    var arr1 = array[0].toString(16);
    var arr2 = array[1].toString(16);
    // alert("arr1:"+arr1);
    // alert("arr2:"+arr2);
    var arr3 = arr1.concat(arr2);
    // change to hex
    var attr = arr3.concat(s.toString(16));

    var hashattr = (Web3.prototype.sha3(attr));
    //s? or s.toString(16)?
    myContract.prove_attributes_ownership(hashattr, {
        from: user.account,
        gas: 4200000
    }, function (error, result) {
        if (error) {
            alert("Error: Was not able to prove the ownership")
            console.log(error)
        }
        else {
            document.getElementById("varsus").innerHTML = "Ownership proved."
        }
    })
}
