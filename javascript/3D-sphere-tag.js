
const texts = [
    'HTML','CSS','ES5/ES6','TypeScript','REST','GSAP', 'Angular','Wordpress','Shopify','Node JS',
    'Git', 'Bootstrap','SASS', 'ReactJS','jQuery', 'SQL', 'Gulp','npm','BEM'
];

let  tc = TagCloud('#tag-cloud', texts, {
    texts : texts,
    radius: 210,
    maxSpeed: 'slow',
})

document.querySelectorAll('.tagcloud--item').forEach(function (el) {
    el.addEventListener('click', function () {
        let link = "https://www.google.com/search?q="+encodeURIComponent("Why choose "+el.textContent+" ?");
        window.open(link,'_blank');
    })
} )