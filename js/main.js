'use strict'

let dropDown = document.querySelector('.nav__language');
let dropDownContent = document.querySelector('.drop-down-content');

let languageRussia = document.querySelector('.language-russia');
let flagRussia = document.querySelector('.svg-flag-russia');
let flagUk = document.querySelector('.svg-flag-uk');


dropDown.addEventListener('click', function () {
    console.log('click');

    if (dropDownContent.style.cssText === 'display: none;') {
        dropDownContent.style.cssText = 'display: flex;';

    } else dropDownContent.style.cssText = 'display: none;';

})

languageRussia.onclick = function () {
    if (flagRussia.style.cssText === 'display: none;') {
        flagRussia.style.cssText = 'display: flex;';
        flagUk.style.cssText = 'display: none;';

    } else {
        flagRussia.style.cssText = 'display: none;';
        flagUk.style.cssText = 'display: flex;';
    }

}

//SLIDER
const slider = document.querySelector('.slider-wrapper__img .slider-wrapper__img-flip');
const exampleImages = document.querySelectorAll('.slider-wrapper__img-flip img');
let buttonPrevious = document.querySelector('.btn-previous');
let buttonNext = document.querySelector('.btn-next');

let count = 0;
let widthSlider;

widthSlider = slider.offsetWidth;

console.log(widthSlider)

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

console.log(exampleImages.length);

function flipThrough() {
    slider.style.transform = 'translate(-' + count * widthSlider + 'px)';
}

