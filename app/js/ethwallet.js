var web3 = new Web3();
      var global_keystore;
      var global_addresses;

      

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
        addonclickAtt.value = "gotodash();"
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



      function setSeed() {
          var password = document.getElementById('exCrpPwd').value;
     lightwallet.keystore.createVault({
        password: password,
        seedPhrase: document.getElementById('seedm').value,
        //random salt 
        hdPathString: "m/0'/0'/0'"
      }, function (err, ks) {

        global_keystore = ks
         
        document.getElementById('seedm').value = ''
         newAddressesR(password);
        
        //setWeb3Provider(global_keystore);
        
        //getBalances();
        })
      }

      function newWallet() {
       $('#genbutton').hide(); 
       $('#modalLoader').show(); 
        var extraEntropy = document.getElementById('userEntropy').value;
        document.getElementById('userEntropy').value = '';
        var randomSeed = lightwallet.keystore.generateRandomSeed(extraEntropy);

        var infoString = 'Wallet created! seed is: "<span style="color:blue;">' + randomSeed + '</span>".' 
        var password = document.getElementById('Crptpass').value;


      lightwallet.keystore.createVault({
        password: password,
        seedPhrase: randomSeed,
        //random salt 
        hdPathString: "m/0'/0'/0'"
      }, function (err, ks) {

        global_keystore = ks;
            
        newAddresses(password,infoString);
        
        
        //setWeb3Provider(global_keystore);
        //getBalances();
        })
      }
    function saveToLocal(){
        localStorage.setItem('senderon694e70190a79', JSON.stringify(global_keystore));  
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
        gotodash();
            
        //for (var i=0; i<addresses.length; ++i) {
          //document.getElementById('sendFrom').innerHTML += '<option value="' + addresses[i] + '">' + addresses[i] + '</option>'
          //document.getElementById('functionCaller').innerHTML += '<option value="' + addresses[i] + '">' + addresses[i] + '</option>'
        //}

        //getBalances();
      })
      }