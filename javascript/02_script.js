
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

ScrollReveal().reveal('.form__container', { delay:100, origin: 'bottom', distance:'50px'});
 

ScrollReveal().reveal('.form__title', {delay:120, origin:'left', distance:'90px'})




//CREACIÓN DEL FORMULARIO


//Primera parte

var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var telefono = document.getElementById("tel")
var email = document.getElementById("email")




function validar(){
    
    let correcto = true;
    let mensaje = "";

    
    /***********Nombre*************/

    if(nombre.value == null || nombre.value == "" ){
        mensaje += "El campo nombre no puede estar en blanco.\n";
        correcto = false;

    }else{
        let name_re = /^[a-zA-Z]{2,30}$/

        if(!name_re.exec(nombre.value)){
            mensaje += "El campo nombre está compuesto por letras.\n";
            correcto = false;
        }

    }

    
    /***********Apellido*************/

    if(apellido.value == null || apellido.value == ""){
        mensaje += "El campo apellido no puede estar en blanco.\n"
        correcto = false;
       

    }else{
        if(!name_re.exec(apellido.value)){
            mensaje += "El camp apellido está compuesto por letras.\n"
            correcto= false;
        }

    }



    /***********Número*************/

    if(telefono.value == null || telefono.value == ""){
        mensaje += "El campo teléfono no puede estar en blanco.\n"
        correcto = false;

    }else{
        let numero_re = /^[0-9]{1,9}$/
        if(!numero_re.exec(telefono.value)){
            mensaje += "El campo teléfono está compuesto por números.\n"
            correcto= false;
        }

    }


    /***********Email*************/

    if(email.value == null || email.value == ""){
        mensaje += "El campo email no puede estar en blanco.\n"
        correcto = false;

    }else{
        let email_re = /^(.+\@.+\..+)$/;
        if(!email_re.exec(email.value)){
            mensaje += "El campo email debe tener un correo válido.\n"
            correcto = false;
        }
    }

    if(correcto == true){
        return true;

    }else{
        alert(mensaje);
        return false;
        
    }

}


//Segunda parte

var producto = document.getElementById("producto")
var entrega = document.getElementById("entrega")
var extras = document.getElementsByClassName("checkbox")
var presupuesto = document.getElementById("presProducto")
var condiciones = document.getElementById("condiciones")
var myButton = document.getElementById("enviar")
let myForm = document.getElementById("formulario")



window.addEventListener('load', calculoPresupuesto);

producto.addEventListener("change", calculoPresupuesto);

entrega.addEventListener("input", calculoPresupuesto);

for(let i=0; i<extras.length; i++){
    extras[i].addEventListener("change", calculoPresupuesto);
};

//Validación formulario de primera parte y segunda parte

myButton.addEventListener("click", function(evento){
    evento.preventDefault();

    valido = validar();

    if(valido && producto.value && entrega.value && condiciones.checked){
        alert("Formulario enviado")
        myForm.submit();
    
    }else{
        alert("El formulario no se puede enviar");
    }
})




function calculoPresupuesto(){
    


    //seleccion producto
    let total = parseFloat(producto.value) || 0;
    let descuento = 0;





    //descuento por entrega

    let meses = parseInt(entrega.value) || 0;

    if(meses >= 6 ){
        descuento = 0.1;

    }else if(meses >= 2){
        descuento = 0.2;
    }


    console.log("descuento:", descuento);

    //sumar por extras

    for(let i=0; i<extras.length; i++){
        if(extras[i].checked){
            total += parseFloat(extras[i].value) || 0;
        }
    }

    console.log("total con extras:", total);

    

    //calcular presupuesto 

    total = total*(1 - descuento);

    console.log("calculo del total", total)

    presupuesto.value = total;

    console.log("Valor establecido en presupuesto:", presupuesto.value);


}
