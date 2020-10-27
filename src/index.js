import './style.scss';

//Scroll To
function addHandlerForScrollToElement(el, target) {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        target.scrollIntoView({
            behavior: "smooth",
            block: 'center'
        })
    })
}

document.querySelectorAll('a.scroll-to').forEach((anchor) => {
    addHandlerForScrollToElement(anchor, document.querySelector(anchor.getAttribute('href')));
})

//Sticky menu
let positionRounds = document.querySelector('.circle-links');
const clientHeight = window.innerHeight / 2 + 41.5;
let headerOverlay = document.querySelector('.header-overlay');

function onScroll() {
    if (positionRounds.getBoundingClientRect().y <= clientHeight) {
        positionRounds.classList.add('sticky');
        headerOverlay.classList.remove('deactivate');
    }
    if (window.scrollY < clientHeight) {
        positionRounds.classList.remove('sticky');
        headerOverlay.classList.add('deactivate');
    }
}

window.addEventListener('scroll', (e) => {
    e.preventDefault();
    onScroll();
})

onScroll();
