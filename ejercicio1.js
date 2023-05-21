const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo{
	algoritmo(){
	 let a,b,c,resultado
	 a=0, b=0, c=0,
	 a= leer ("digite el valor de A:")
	 b= leer ("digite el valor de B:")
	 c= leer ("digite el valor de C:")
	 resultado = (-b+Math.sqrt(b**2-4*a*c))/(2*a)
	 escribir.log ("el resultado es: ",resultado)
	}
}
let a= new algoritmo ()
a.algoritmo()