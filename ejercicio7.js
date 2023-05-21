const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo7(){
        let radio,area,lon 
	    radio= leer ("Digite el valor del radio:")
	    area = Math.PI * radio**2
	    lon = 2 * Math.PI *radio
	    escribir.log( "El area de la circunferencia es: ",area)
	    escribir.log( "la longitud es: ",lon)
    }
}
let a = new algoritmo ()
a.algoritmo7 ()