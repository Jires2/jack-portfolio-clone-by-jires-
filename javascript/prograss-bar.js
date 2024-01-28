// import {  toggle } from "./menu-button.js";

$('#menu a').on('click', function(el){
    let anchor = $(this).attr('href');

    let loadingProgress = function () {
        let counter = 0;
        setInterval( function (){
            if (counter === 100)
            {
                clearInterval(loadingProgress)
            } else{
                counter +=1;
                $('.loading__progress-bar__fill').val(counter);
            }
        }, 15)
    }

    el.preventDefault();

    $('.loading').css('left','0'); 
    $('.loading').css('top', '0')
    setTimeout( loadingProgress, 1200);

    setTimeout(function() {
        $('.loading').css('left', '100%');

        setTimeout(function() {
            
            window.location.href = anchor;
            $('.loading').css('top', '100vh');
            $('.loading').css('left','-100%'); 

        }  ,500);

       

        $('.loading__progress-bar__fill').attr('value', 0);
        $('.sidebar').removeClass('fill');

        if ($(".menu-button").css('display') === 'flex'){
            $('.visible').toggle();
            $('.invisible').toggle();
        }
        // setTimeout(function(param) {
        //     window.location.reload(true);
        // }, 750)
    }, 2900)
    
})