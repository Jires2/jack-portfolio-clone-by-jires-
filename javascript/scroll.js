
document.querySelectorAll(".bouncer>span").forEach(element => {
    element.classList.add("letter-hidden");
})

function letterApearing(letterArr) {

    letterArr.forEach(function(letter, index ){

        setTimeout(() => {
            letter.classList.remove('letter-hidden')
            letter.classList.add("let-bounce")

            setTimeout(() => {
                letter.classList.remove('let-bounce')
            }, 1000)

        }, 160 * index );
    })
}

window.articleVisible = ScrollReveal() ;
articleVisible.reveal('.scroll-appearance',{
    reset: false, duration: 2000, origin:'bottom', distance:"200px", delay:'300', interval: '10'
});

const articles = document.querySelectorAll('article'); 

const observer = new IntersectionObserver(function( entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // console.log(entry.target.querySelectorAll('.letter-hidden'));
            let letters = entry.target.querySelectorAll('.letter-hidden');
            letterApearing(letters);
        }
    })
})

articles.forEach(function(article){
    observer.observe(article)
})
