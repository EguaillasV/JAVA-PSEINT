const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo10(){
        let precio, descuento,precio_final 
	    precio= leer ("digite el precio a pagar: ")
	    descuento = precio*0.15
	    precio_final = precio-descuento 
	    escribir.log("el precio a pagar es de: ",precio_final)
    }
    
}
let a = new algoritmo ()
a.algoritmo10 ()