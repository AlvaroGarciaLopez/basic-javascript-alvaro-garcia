const pt = require("prompt-sync")({sigint: true })

const nota = pt ("¿Cuál es tu nota? ");
if (nota >0 && nota <3) {
    console.log('muy deficiente')
} else if(nota >=3 && nota <5) {
    console.log('insuficiente')
} else if(nota >=5 && nota <6) {
    console.log('suficiente') 
} else if(nota >=6 && nota <7) {
    console.log('bien') 
} else if(nota >=7 && nota <9) {
    console.log('notable') 
} else if(nota >=9 && nota <10) {
    console.log('sobresaliente') 
}