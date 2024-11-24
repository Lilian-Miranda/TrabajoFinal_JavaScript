
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

ScrollReveal().reveal('.text__presentation-container', { delay:80, origin: 'left', distance:'50px'});

ScrollReveal().reveal('.h2__auten', { delay:80, origin: 'left', distance:'50px'});
5
ScrollReveal().reveal('.productos__muestra', { delay:200, origin: 'bottom', distance:'40px'});

ScrollReveal().reveal('.entorno__data', { delay:200, origin: 'left', distance:'50px'});

ScrollReveal().reveal('.entorno_img-container', { delay:200, origin: 'top', distance:'50px'});

ScrollReveal().reveal('.h2_json', { delay:80, origin: 'right', distance:'50px'});

ScrollReveal().reveal('.json_container', { delay:200, origin: 'bottom', distance:'100px'});

ScrollReveal().reveal('.form__container', { delay:100, origin: 'bottom', distance:'50px'});


//Texto JSON

function cargar(){
    $.ajax({
        url:'./javascript/texto.json',
        type: 'GET',
        success: function (data){
            let objeto_json = data;
            let cadena= "";

            for (let i=0; i < objeto_json.modelos.length; i++){

                cadena+=`
                    <div class="joya-container">
                        <div class="joya-info">Joya: ${objeto_json.modelos[i].joya}</div>
                        <div class="joya-info">Material: ${objeto_json.modelos[i].parametros.material}</div>
                        <div class="joya-info">Ciudad: ${objeto_json.modelos[i].parametros.ciudad}</div>
                        <div class="joya-info">Año: ${objeto_json.modelos[i].parametros.año}</div>
                    </div>
                
                `;
                /*cadena += "<strong>Joya:</strong>" + objeto_json.modelos[i].joya + "<br>";
                cadena += "<strong>Material:</strong>" + objeto_json.modelos[i].parametros.material + "<br>";
                cadena += "<strong>Ciudad:</strong>" + objeto_json.modelos[i].parametros.ciudad + "<br>";
                cadena += "<strong>Año:</strong>" + objeto_json.modelos[i].parametros.año + "<br><br>";*/
            
            }

            document.getElementById("json_data").innerHTML = cadena;
        },

        error: function(xhr, status){
            alert("Error al cargar el archivo json")
        }
    });

};

cargar();


