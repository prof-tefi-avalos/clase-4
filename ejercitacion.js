let frutas = []
let seguir = true


//Mientras seguir sea verdadero, voy a ejecutar el bloque de codigo
while(seguir){
    //El confirm es una alerta que permite al usuario decir "aceptar" (true) o "cancelar" (false)
    agregarFruta = confirm("¿Querés agregar una fruta?")
    //Si el usuario aprieta aceptar, vamos a pedirle al usuario qué fruta quiere agregar con un prompt
    if(agregarFruta){
        let fruta = prompt("Agregá tu fruta:")
        //Agregamos con push aquello que el usuario ingresó en el prompt
        frutas.push(fruta)
    } else {
        //Si el usuario pone cancelar, le va a dar la lista de frutas que sumó
        alert("Hasta ahora compraste: " + frutas)
    }

}


