
// ()

function toggle() {
    const bar = $(this).children('.visible').toggle();
    const cross = $(this).children('.invisible').toggle();

    $('.sidebar').toggleClass('fill')
}

$('.menu-button').on('click', toggle)