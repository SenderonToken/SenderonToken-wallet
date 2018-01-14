  const ipc = require('electron').ipcRenderer;
function gotohome(){
	ipc.send('load-page', 'app/index.html');
}

$(document).ready(function(){
    //$('#createwallet').click(function(){
      //  $('#myModal').css('display',"block");
      //  $('#passsuccess').css('display', 'none');
       // $('#passform').css('display', 'block');
   // });
    global_keystore = JSON.parse(localStorage.senderon694e70190a79);
    
    lightwallet.keystore.createVault({
        password: 'password',
        seedPhrase: 'amazing fancy dawn screen staff dune vapor nephew cotton upgrade year tiny',
        //random salt 
        hdPathString: "m/0'/0'/0'"
      }, function (err, ks) {

        global_keystore.__proto__ = ks.__proto__;
        
        setWeb3Provider(global_keystore);
        var addresses = global_keystore.getAddresses();
        global_address = addresses[0];
        $('#createwallet').text('Wallet Address: '+addresses[0]);
        
        getBalances();
        });
   
   $('#navbutton').click(function(){
        $('nav').toggle( "blind",500);
    });
	$('#navb2').click(function(){
        $('.side-nav').toggle( "blind",500);
    });
    $('.sendsend').click(function(){
        $('#paymentModal').css('display',"block");
        $('#modalLoaderp').css('display', 'none');
        $('#sendform').css('display', 'block');
    });
    
     $('#home').click(function(){
        localStorage.removeItem('senderon694e70190a79');
         gotohome();
    });
    
    $('#createtransferSubmit').click(function(e){
        e.preventDefault();
        $('#modalLoaderp').css('display', 'block');
        $('#sendform').css('display', 'none');
        var recipientsAddress = $('#recadd').val();
        var sendAmount = $('#sendamount').val();
        sendAmount=sendAmount*1000000000000000000;
        //var walletPassword = $('#sendwalletpass').val();
       // gethinstance();
        //var unlock=web3.personal.unlockAccount(data_address,walletPassword,60);
        //console.log(unlock);
        //if(unlock===true){
         var gasPrice = $('#gasPrice').val();
		 gasPrice=gasPrice*1000000000;
        var gas = 50000;
            var fromme = {from: global_address, gasPrice: gasPrice, gas: gas};
            sdrninstance();
            var txhash = sdrn.transfer.sendTransaction(recipientsAddress,sendAmount,fromme, function (err, txhash) {
          console.log('error: ' + err)
          console.log('txhash: ' + txhash)
                if (!txhash) {
                $('#modalLoaderp').text(err);
            }
            else {
                    $('#modalLoaderp').text('Transaction was Successful. Tx hash: '+txhash);
                }
      
                 
        
                
        });
        console.log(txhash);
       
        
        /*if (!txhash) {
                $('#modalLoaderp').text('Something is not right! '+txhash);
            }
            else {
                    $('#modalLoaderp').text('Transaction was Successful. Tx hash: '+txhash);
                }
             }else{
            $('#modalLoaderp').css('display', 'none');
                 $('#sendform').css('display', 'block');
                 $('#sendnote').text('Wrong Password!');
                 
        }*/
                //console.log(transferFee);        
    });
    $('#createWalletSubmit').click(function(e){
        e.preventDefault();
        var walletpass = $('#walletpass').val();
        var cwalletpass = $('#cwalletpass').val();
        var walias =  $('#walias').val();
        if(walias){
        if(walletpass && walletpass==cwalletpass){
            $('#passsuccess').css('display', 'block');
            $('#passform').css('display', 'none');
            gethinstance();
            var address=web3.personal.newAccount(walletpass);
         if(address){
        $.ajax({
            url: SITEPATH + "homes/addwallet/",
            data:{
                walias: walias,
                address: address,
                password: walletpass,
            },
            type: "POST",
            beforeSend: function() {
                $('#modalLoader').css('display', 'block');
            },
            complete: function() {
                //$('#modalLoader').css('display', 'none');
            },
            success: function(result) {
                //console.log(result);
                var addresp = JSON.parse(result);
                if(addresp){
                    $('#f2asecret').text('Wallet Created! ADDRESS: '+ address);
                     $('#modalLoader').html($('<div>', {id:"seed",
                  text: address}));
                    
                    setTimeout(reloadpage, 3000);
                }else{
                    $('#f2asecret').text('Something went wrong');
                    $('#modalLoader').html("");
                } 
            }
        });}
            else{
                $('#createwallnote').text('Unable to generate password');
                 $('#modalLoader').css('display', 'none');
                
            }
    }else{
        $('#createwallnote').text('Passwords dont match!');
    }
    }else{
         $('#createwallnote').text('Wallet name cannot be empty!');                      
        }
    });
    
    
    $('.close').click(function(){
        $('.modal').css('display',"none");
    });
  
   
});