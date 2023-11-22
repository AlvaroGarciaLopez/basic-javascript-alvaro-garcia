const input = require ("prompt-sync")({sigint: true})

let cancelar = false
let numImput
let num 
let suma = 0

while (!cancelar) {
    numImput = input ('introduce un numero para sumar ')

    if (Number(numImput)) {
        num = Number(numImput)
        suma += num
    }  else if (numImput !== 'cancelar'){
        console.log ('pon un numero')
    }  else {
        cancelar = true
    }
}

console.log ('el total de la suma es ' + suma)