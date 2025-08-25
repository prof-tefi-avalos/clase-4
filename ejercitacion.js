let frutas = []
let seguir = true

while(seguir){
    agregarFruta = confirm("¿Querés agregar una fruta?")
    if(agregarFruta){
        let fruta = prompt("Agregá tu fruta:")
        frutas.push(fruta)
    } else {
        alert("Hasta ahora compraste: " + frutas)
    }

}


