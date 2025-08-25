    function comprarFrutas() {
      let frutas = []
      let seguir = true

      while (seguir) {
        let agregarFruta = confirm("¿Querés agregar una fruta?")
        if (agregarFruta) {
          let fruta = prompt("Agregá tu fruta:")
          frutas.push(fruta)
        } else {
          seguir = false
          alert("Hasta ahora compraste:\n" + frutas.join("\n"))
        }
      }
    }