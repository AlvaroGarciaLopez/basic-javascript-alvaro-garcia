const pt = require("prompt-sync")({sigint: true})

let cadenaInput = pt("introducir texto -> ")
let palabra
let cadena = ""

while (cadenaInput != "cancelar") {
    if (String(cadenaInput)) {
        palabra = String(cadenaInput)
        cadena = (cadena + palabra + "-")
    } else {
        console.log('solo son correctos valores alfabeticos');
    }

    cadenaInput = pt("introducir texto -> ")
}

console.log("la cadena dicha es: " + cadena);