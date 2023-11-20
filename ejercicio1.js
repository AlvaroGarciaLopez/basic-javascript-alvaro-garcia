const pt = require("prompt-sync")({sigint: true })

const nombre = pt("¿Cuál es tu nombre? => ");
const edad = pt("¿Cuál es tu edad? => ");


if ( edad >= 18){
console.log("puedes conducir ");
} else {
console.log("no puedes conducir ");
}
