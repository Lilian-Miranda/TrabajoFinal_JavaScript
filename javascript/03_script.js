
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

ScrollReveal().reveal('.ubication__data-container', { delay:200, origin: 'right', distance:'50px'});

ScrollReveal().reveal('#map', { delay:200, origin: 'top', distance:'50px'});


//CREACIÓN DEL MAPA

let options ={
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
        
    )

}else{
    alert("Los servicios de geolocalización no están disponibles")

}



function success(position){
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;

let map = L.map('map',{
    center:[latitude,longitude],
    zoom: 18
})


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'Mi OpenStreetMap'}).addTo(map)

let ruta = L.Routing.control({
    waypoints: [
        L.latLng(latitude,longitude),
        L.latLng([42.407560,0.741287])
    ],
    language: 'es',
}).addTo(map);

}


function error(){

}