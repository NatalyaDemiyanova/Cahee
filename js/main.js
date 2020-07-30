// 'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const $burger = document.querySelector('#burger');
    const $navigation = document.querySelector('#navigation'); 
    const $backdrop = document.querySelector('#backdrop');
    const $navigationItem = document.querySelector('#navigation').children;

    $burger.addEventListener('click', () => {
        $burger.classList.toggle('burger--active');
        $navigation.classList.toggle('navigation__list--active');
        $backdrop.classList.toggle('header__backdrop--active');
    });

    const navigationItem = [...$navigationItem];
    navigationItem.forEach(el => {
        el.addEventListener('click', () => {
            $navigation.classList.toggle('navigation__list--active');
            $backdrop.classList.remove('header__backdrop--active');
        }); 
    });        
});
