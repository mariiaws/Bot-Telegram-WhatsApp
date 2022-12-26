'use strict'

let languageRussia = document.querySelector('.language-russia');
let flagRussia = document.querySelector('.svg-flag-russia');
let navLng = document.querySelector('.nav__language');

navLng.addEventListener('click', showHide);

function showHide(event) {
    let target = event.target;

    if (target.closest('.language-uk') || target.closest('.language-russia')) {
        languageRussia.classList.toggle('language--active');
        flagRussia.classList.toggle('language--active');
    }

    function changeURLLanguage() {

        if (target.closest('.language-uk')) {
            for (let key in objLang) {
                document.querySelector('.' + key).innerHTML = objLang[key].en;
            }
        }

        if (target.closest('.language-russia')) {
            for (let key in objLang) {
                document.querySelector('.' + key).innerHTML = objLang[key].ru;
            }
        }
    }

    changeURLLanguage()
}

function scrolling() {
    const el = document.querySelector('.link-q-a');
    el.onclick = () => {
        let count = document.querySelector('.q-a__title').getBoundingClientRect().top;
        window.scroll({top: count, behavior: "smooth"})
    }
}

scrolling()

//SLIDER
window.onload = () => {

    function slider() {
        const slider = document.querySelector('.slider-wrapper__img .slider-wrapper__img-flip');
        const exampleImages = document.querySelectorAll('.slider-wrapper__img-flip img');
        let buttonPrevious = document.querySelector('.btn-previous');
        let buttonNext = document.querySelector('.btn-next');

        let count = 0;
        let widthSlider;

        widthSlider = slider.offsetWidth;

        buttonNext.addEventListener('click', () => {
            count++;
            if (count >= exampleImages.length) {
                count = 0;
            }

            flipThrough();
        })

        buttonPrevious.addEventListener('click', () => {
            count--
            if (count < 0) {
                count = exampleImages.length - 1;
            }
            flipThrough()
        })

        function flipThrough() {
            slider.style.transform = 'translate(-' + count * widthSlider + 'px)';
        }

    }

    slider()
}

//Accordion

let accordionButton = document.querySelectorAll('.accordion-button');

let i;

for (i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener("click", function () {
        console.log('click');
        let panel = this.nextElementSibling;
        if (panel) {
            panel.classList.toggle('panel-active');
        }

        let arrow = this.lastElementChild;
        if (arrow) {
            arrow.classList.toggle("button-active");

        }

    });
}


