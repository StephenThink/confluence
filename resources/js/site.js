// This is all you.
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()


// const ham = document.getElementById('ham');
// const navmenu = document.getElementById('navmenu');
// const burger = document.getElementById('burger');
// const close = document.getElementById('close');
//
// ham.addEventListener("click", function(e) {
//     navmenu.classList.toggle("open");
//     burger.classList.toggle("hidden");
//     close.classList.toggle("hidden");
//     e.stopPropagation();
//
// })

const hero = document.getElementById('heroContainer');
const cell = document.querySelectorAll('cell');
const dot = document.querySelectorAll('.dot');
const cellTotal = cell.length;
let index = 0;
let prevIndex = 0;

if (hero) {
    initCells();
    dotAction();

    // nextCell();
}

function initCells() {
    cell[index].classList.remove('translate-x-full')
    cell[index].classList.toggle('hidden');
    dot[index].classList.add('dot-active');
}

function clickDot(e) {
    console.log(e);
}

function dotAction() {
    dot.forEach(function(dots) {
        let dotIndex = dots.getAttribute('data-index');

        dots.addEventListener('click', function(e) {
            console.log(dotIndex);
            prevIndex = index;
            index = dotIndex;
            dotClearing();
cellClearing();
            // Clicking the Dot turns it active.
            dot[index].classList.add('dot-active');
        });
    })
}

function dotClearing() {
    dot.forEach((item, index) => {
        if (item.classList.contains('dot-active')) {
            item.classList.remove('dot-active');
        }
    })
}

function cellClearing() {

    cell[index].classList.add('translate-x-full')
    cell[index].classList.remove('hidden')
    cell[index].classList.remove('translate-x-full')

    // cell[prevIndex].classList.add('slideOutLeft')
    // cell[index].classList.remove('fadeIn')
   // cell[index].classList.add('fadeIn')
    // Animate and Hide the Previous Cell
    // setTimeout(() => {
    //     cell[prevIndex].classList.remove('slideInLeft')
    // }, 2000);
    setTimeout(() => {
        cell[prevIndex].classList.add('hidden')
    }, 2000);
}

