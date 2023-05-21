const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo4(){
        let a,b,c,resultado 
        a= 10
        b= 20
        c= leer ("Digite un numero:")
            
        resultado = a+b+c
        escribir.log( "el resultado es: ",resultado); 
    }
}    
let a = new algoritmo ()
a.algoritmo4 ()