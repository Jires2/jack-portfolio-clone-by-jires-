// Inputs Focus Even

$('input').on('focus', function() {
    $(this).parent('.input').addClass('active')
})

// inputs FocousOut Even

$('input').on('focusout', function() {
    $(this).parent('.input').removeClass('active')
})

// text Area Even 

$('textarea').on('focus', function(){
    this.parentNode.classList.add('active');
})

// text Area FocusOut

$('textarea').on('focusout', function() {
    $(this).parent('.input').removeClass('active')
})