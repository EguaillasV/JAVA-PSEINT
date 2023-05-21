const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo12(){
	    let  num 
		num= leer ("digite un numero: ")
		
		if (num % 2 === 0){
			console.log("el numero ",num," es par")
	    } else {
			console.log( "elnumero ",num," es impar")
			
		}
	}
}
let a = new algoritmo ()
a.algoritmo12()