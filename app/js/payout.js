
$(document).ready(function(){
    $('#payoutSubmit').click(function(e){
        e.preventDefault();
        var pwd= $('#pwod').val();
        var cpwd= $('#cpwod').val();
        if(pwd && pwd==cpwd){
             $('#importform').submit();
           }else{
            $('#impnote').text('Passwords dont match!');
           }
    });
});
