const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo5(){
        let a,b,resultado 
        a=10
        b= parseInt(leer ("Digite un numero:"))
        resultado = a+b
        escribir.log ("El resultado es: ",resultado);
    }
}
let a = new algoritmo()
a.algoritmo5 ()