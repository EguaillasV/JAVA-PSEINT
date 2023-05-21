const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo16(){
		let num1,num2,num3 
		num1 = leer('Digite el primer número: ');
		num2 = leer('Digite el segundo número: ');
		num3 = leer('Digite el tercer número: ');
		    if (num1>num2 & num1>num3) {
			  escribir.log('el mayor es: ',num1)}
	    else{
			  if (num2>num1 & num2>num3) {
				escribir.log( 'el mayor es: ',num2)}
		    else{
				escribir.log("el mayor es: ",num3)}
		}
	}
}
let a = new algoritmo ()
a.algoritmo16 ()