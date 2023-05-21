const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo14(){
		let compra  
		let descuento,precio_final 
		compra= leer ("digite la cantidad a pagar: ")
		  
		if (compra>100) {
			descuento = compra*0.2
		}else{
			descuento = 0
		    }
		    precio_final = compra-descuento
		escribir.log("el precio a pagar es: ",precio_final)
	}
}      
let a = new algoritmo ()
a.algoritmo14 ()