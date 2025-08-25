// lo visto en clase
function elegirRuta(calleColapsada){
    if(calleColapsada) {
        return "tomar otro camino"
    } else{
        return "seguir en este"
    }
}

console.log(elegirRuta(true))
console.log(elegirRuta(false))

// ejemplo de contador
//la funcion indica de qué numero (inicio) a qué número contamos
function contador(inicio, fin) {
    // desde inicio,  mientras i sea menor o igual a fin, incrementamos de a uno
  for (let i = inicio; i <= fin; i++) {
    //mostramos en consola los numeros (todos desde el valor de inicio hasta el valor de fin)
    console.log(i)
  }
}

contador(4, 20)
