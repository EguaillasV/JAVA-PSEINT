const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo2(){
        let a,b,resultado 
	    a=0; b=0
	    a= leer ("Digite el valor de A: ");
	    b= leer ("Digite el valor de B: ");
        resultado = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b)
	    escribir.log("El resultado es: ",resultado)
	}
}
let a = new algoritmo ()
a.algoritmo2 ()