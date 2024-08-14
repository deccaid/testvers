$('.autoplay').slick({
    slideToScroll:0.5,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    variableWidth: true,
    dots:true,
    arrows:true,
    
});
let headerBlock = document.querySelector('.header')
let windowMenu = document.querySelector('.menu-popup')
let buttonMenu = document.querySelector(".header__button-menu")
let buttonClose = document.querySelector('.header__button-close')
buttonMenu.addEventListener('click', function () {
    windowMenu.classList.add('active-menu')
    document.body.classList.add('no-scroll');
    headerBlock.classList.add('active-header');  
    document.querySelector(".header__button-menu").value = "";  
})

buttonClose.addEventListener('click', function () {
    windowMenu.classList.remove('active-menu')
    document.body.classList.remove('no-scroll');
    headerBlock.classList.remove('active-header');  
    document.querySelector(".header__button-menu").value = "МЕНЮ";  
})
function parallax() {
    var parallax = document.getElementById("parallax");
    parallax.style.top = -(window.pageYOffset / 4)+'px';
  }
  window.addEventListener("scroll", parallax, false);