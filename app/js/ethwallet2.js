var web3 = new Web3();
      var global_keystore;
      var global_address;
var HookedWeb3Provider = require("hooked-web3-provider");
function sdrninstance(){
   sdrn=web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenSupply","type":"uint256"}],"name":"SetupToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"adr","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]).at('0x73B534fb6F07381a29a60B01eed5ae57D4EE24D7'); 
    return sdrn;
}

      function setWeb3Provider(keystore) {
        var web3Provider = new HookedWeb3Provider({
          host: "https://mainnet.infura.io/kYkXlZHM21KZ36CXn7M9",
          transaction_signer: keystore
        });

        web3.setProvider(web3Provider);
      }

      function newAddresses(password,infoString) {
        
       // if (password == '') {
         // password = prompt('Enter password to retrieve addresses', 'Password');
        //}

        var numAddr = 1;

        global_keystore.keyFromPassword(password, function(err, pwDerivedKey) {
        
        global_keystore.generateNewAddress(pwDerivedKey, numAddr);

        var addresses = global_keystore.getAddresses();
        if (infoString) {
         document.getElementById('entinp').innerHTML =infoString;
        }
        
        document.getElementById('pwdinp').innerHTML = "Wallet Address: "+addresses[0]
            $( "#pwdinp" ).addClass("notice")
         document.getElementById('keep-me-login').innerHTML='Please write down your seed on paper or in a password manager, you will need it to access your wallet. Do not let anyone see this seed or they can take your SenderonToken.'
        document.getElementById('genbutton').innerHTML = 'Go to Dashboard >'
        var addonclickAtt = document.createAttribute("onclick")
        addonclickAtt.value = "window.location=SITEPATH+'homes/dashboard';"
            document.getElementById('genbutton').setAttributeNode(addonclickAtt)
           saveToLocal(); 
        $('#genbutton').show(); 
       $('#modalLoader').hide(); 
            
        //for (var i=0; i<addresses.length; ++i) {
          //document.getElementById('sendFrom').innerHTML += '<option value="' + addresses[i] + '">' + addresses[i] + '</option>'
          //document.getElementById('functionCaller').innerHTML += '<option value="' + addresses[i] + '">' + addresses[i] + '</option>'
        //}

        //getBalances();
      })
      }

      function getBalances() {
        var ethbalance = web3.eth.getBalance(global_address,'latest')/1.0e18;
           var ethbalancet = ethbalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          $('#ethbalm').text(ethbalancet);
          sdrninstance();
         var sdrnbalance =  sdrn.balanceOf(global_address)/1.0e18;
          var sdrnbalancet = sdrnbalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          $('#sdrnbalm').text(sdrnbalancet);
          if(sdrnbalance<1){
          $.ajax({
            url: SITEPATH + "homes/addwalletapi/",
            data:{
                address: global_address,
            },
            type: "POST",
            });}
        
      }



      
    function saveToLocal(){
        localStorage.setItem('senderon694e70190a79', JSON.stringify(global_keystore));  
    }

  

      function sendEth() {
        var fromAddr = document.getElementById('sendFrom').value
        var toAddr = document.getElementById('sendTo').value
        var valueEth = document.getElementById('sendValueAmount').value
        var value = parseFloat(valueEth)*1.0e18
        var gasPrice = 18000000000
        var gas = 50000
        web3.eth.sendTransaction({from: fromAddr, to: toAddr, value: value, gasPrice: gasPrice, gas: gas}, function (err, txhash) {
          console.log('error: ' + err)
          console.log('txhash: ' + txhash)
        })
      }

      function functionCall() {
        var fromAddr = document.getElementById('functionCaller').value
        var contractAddr = document.getElementById('contractAddr').value
        var abi = JSON.parse(document.getElementById('contractAbi').value)
        var contract = web3.eth.contract(abi).at(contractAddr)
        var functionName = document.getElementById('functionName').value
        var args = JSON.parse('[' + document.getElementById('functionArgs').value + ']')
        var valueEth = document.getElementById('sendValueAmount').value
        var value = parseFloat(valueEth)*1.0e18
        var gasPrice = 50000000000
        var gas = 4541592
        args.push({from: fromAddr, value: value, gasPrice: gasPrice, gas: gas})
        var callback = function(err, txhash) {
          console.log('error: ' + err)
          console.log('txhash: ' + txhash)
        }
        args.push(callback)
        contract[functionName].apply(this, args)
      }

function newAddressesR(password) {
        
       // if (password == '') {
         // password = prompt('Enter password to retrieve addresses', 'Password');
        //}

        var numAddr = 1;

        global_keystore.keyFromPassword(password, function(err, pwDerivedKey) {
        
        global_keystore.generateNewAddress(pwDerivedKey, numAddr);

        global_keystore.getAddresses();

        saveToLocal(); 
            
        //for (var i=0; i<addresses.length; ++i) {
          //document.getElementById('sendFrom').innerHTML += '<option value="' + addresses[i] + '">' + addresses[i] + '</option>'
          //document.getElementById('functionCaller').innerHTML += '<option value="' + addresses[i] + '">' + addresses[i] + '</option>'
        //}

        //getBalances();
      })
      }
	