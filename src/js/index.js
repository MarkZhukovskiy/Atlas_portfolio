import "../scss/main.scss";

let menuBtn = document.querySelector('.menu-btn');
let navBtns = document.querySelector('.nav_btns');

// Если разрешение меньше 992px появляется бургер
window.addEventListener('resize', function(){
    if(window.innerWidth < 993){
        menuBtn.style.display = 'flex';
    } else if (window.innerWidth > 992){
        menuBtn.style.display = 'none';
    }
});

// При клике на бургер появляется кнопки
menuBtn.addEventListener('click', function(){
    navBtns.classList.toggle('nav-btn-active');
});

// Submenu 
function submenu() {
    let submenu = document.querySelector('.submenu');
    let trigger = document.querySelector('.with_submenu');
    let submenu_arrow = document.querySelector('.submenu_arrow');
    let trigger_link = document.querySelector('.trigger_link');

    trigger.addEventListener('click', () => {
        submenu_arrow.classList.toggle('active');
        submenu.classList.toggle('active');
        trigger_link.classList.toggle('active');
    });
}

submenu();