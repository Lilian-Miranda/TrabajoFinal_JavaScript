

//CONFIGURACIÓN MENÚ DE NAVEGACIÓN RESPONSIVE

var button = document.getElementById("button")
var navLinks = document.getElementById("nav_list")

button.addEventListener("click", function(){
    navLinks.classList.toggle("active");
})





//CONFIGURACIÓN DEL SCROLL

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400

});

ScrollReveal().reveal('.gallery__container', { delay:80, origin: 'bottom', distance:'90px'});

ScrollReveal().reveal('.h1__gallery', { delay:80, origin: 'left', distance:'90px'});