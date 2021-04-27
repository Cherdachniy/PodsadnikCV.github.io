// //SCROLL TO
// function addHandlerForScrollToElement(el, target) {
//     el.addEventListener('click', (e) => {
//         e.preventDefault();
//         target.scrollIntoView({
//             behavior: "smooth",
//             block: 'center'
//         })
//     })
// }
//
// document.querySelectorAll('a.scroll-to').forEach((anchor) => {
//     addHandlerForScrollToElement(anchor, document.querySelector(anchor.getAttribute('href')));
// })

//STICKY MENU
let positionRounds = document.querySelector('.circle-links');
const clientHeight = window.innerHeight / 2 + 41.5;

function onScroll() {
    if (positionRounds.getBoundingClientRect().y <= clientHeight) {
        positionRounds.classList.add('sticky');
    }
    if (window.scrollY < clientHeight) {
        positionRounds.classList.remove('sticky');
    }
}

window.addEventListener('scroll', (e) => {
    e.preventDefault();
    onScroll();
})

onScroll();

//NAVIGATION
document.querySelectorAll('.navigation').forEach((nav) => {
    nav.querySelectorAll('a').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(el.dataset.href).scrollIntoView({behavior: 'smooth'});
        });
    });
});

//ACTUAL AGE
const dateOfBirth = new Date(96, 9);
let actualYear = new Date().getFullYear();
let actualAge = actualYear - dateOfBirth.getFullYear() - 1;
document.querySelector('.actual-age').innerHTML = actualAge;
