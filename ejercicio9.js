const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo9(){
        let cantidadA,cantidadB,cantidadC 
        let tiempoA,tiempoB,tiempoC 
        let tiempo_total 
        let horas, minutos 
        cantidadA= leer ("digite la cantidad de cuestionarios A: ")
        cantidadB= leer("digite la cantidad de cuestionarios B: ")
        cantidadC= leer ("digite la cantidad de cuestionarios C: ")
        tiempoA = cantidadA * 5
        tiempoB = cantidadB * 8
        tiempoC = cantidadC * 6
        tiempo_total = tiempoA + tiempoB + tiempoC 
        horas = Math.trunc(tiempo_total / 60)
        minutos = tiempo_total % 60;
        escribir.log("se tardara ",horas," horas y ",minutos," minutos ")
    }
}
let a = new algoritmo ()
a.algoritmo9 ()