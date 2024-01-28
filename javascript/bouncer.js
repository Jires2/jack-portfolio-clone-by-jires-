

(function () {
    'use strict';
    const bounceLetterList = document.querySelectorAll(".bouncer>span").forEach( function (el) {
        el.addEventListener('mouseover', function() {
            this.classList.add('let-bounce');
            //this.style.color = "#08fdd8" ;
            setTimeout(() => {
            this.classList.remove('let-bounce');
            }, 1000);
        })
    })
})();
 