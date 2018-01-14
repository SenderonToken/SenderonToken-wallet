$(document).ready(function(){
  
    $('#openLoginModal').click(function(){
        $('#myModal').css('display',"block");
       
    });
     $('#openRegModal').click(function(){
        $('#myModal2').css('display',"block");
    });
    
    $('.close').click(function(){
        $('.modal').css('display',"none");
        
     
    });
    $('#navbutton').click(function(){
        $('nav').toggle( "blind",500);
    });
    
});

const ipc = require('electron').ipcRenderer;
function gotodash(){
	ipc.send('load-page', 'app/dashboard.html');
}

				