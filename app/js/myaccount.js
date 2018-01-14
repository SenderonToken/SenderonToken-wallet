const ipc = require('electron').ipcRenderer;
$(document).ready(function(){
	$('#navbutton').click(function(){
        $('nav').toggle( "blind",500);
    });
	$('#navb2').click(function(){
        $('.side-nav').toggle( "blind",500);
    });
	$('#home').click(function(){
		if(localStorage.senderon694e70190a79){
			localStorage.removeItem('senderon694e70190a79');
		};
		if(localStorage.senderon5kij52kn0a79){
			localStorage.removeItem('senderon5kij52kn0a79');
		};
		ipc.send('load-page', 'app/index.html');
	});
	$('#dashLink').click(function(){
		ipc.send('load-page', 'app/dashboard.html');
	});
	$('#myAccountLink').click(function(){
		ipc.send('load-page', 'app/myaccount.html');
	});
    $('#chgpwd').click(function(){
        $('#myModal').css('display',"block"); 
        $('#modalLoaderp').css('display',"none"); 
        
    });
    
    $('#chgpwdSubmit').click(function(e){
         e.preventDefault();
    
        $('#sendform').css('display',"none"); 
       
        var pwd=$('#pwd').val();
        var cpwd=$('#cpwd').val();
        if(cpwd==pwd){
         $.ajax({
            url: SITEPATH + "homes/chgpwd/",
             data:{
                 password:pwd,
             },
            type: "POST",
            beforeSend: function() {
                $('#modalLoaderp').css('display', 'block');
            },
            complete: function() {
                //$('#modalLoader').css('display', 'none');
            },
            success: function(result) {
                 
               if(result){
                  $('#modalLoaderp').text('Password Changed!');
                   
                  }else{
                      $('#modalLoaderp').text('Something went wrong!');
                  }
            }
        });
        }else{
            $('#sendnote').text('Passwords dont match!');
        }
    });
    
    $('.close').click(function(){
        $('.modal').css('display',"none");
    });
    
});