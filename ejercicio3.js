const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo3(){
        let a,b,aux 
        a= leer ("Digite el valor de a: ")
	    b= leer ("digite el valor de b: ")
        aux=a
	    a=b
	    b=aux
	    escribir.log( "El nuevo valor de a es: ",a)
	    escribir.log( "El nuevo valor de a es: ",b)
    }
}
let a = new algoritmo ()
a.algoritmo3 ()