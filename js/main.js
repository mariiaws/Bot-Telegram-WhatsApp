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