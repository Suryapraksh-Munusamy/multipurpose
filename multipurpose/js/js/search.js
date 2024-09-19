$(document).ready(function(){
    
    $('.search-bar').click(function(){
        
        let display = $('#search-box').css("display");

        if(display === 'none'){
            $('#search-box').css("display",'flex')
        }else{
            $('#search-box').css("display",'none')
        }

    })

})