const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo11(){
	    let parcial1, parcial2, parcial3, promedioP, notasParcial ;
	    let examen_final,notaExamen 
	    let notaTrabajo,notaFinalTrabajo 
	    let notaFinal  
	    parcial1= parseFloat(leer("digite la primera nota: "))
	    parcial2= parseFloat(leer("digite la segundo nota: "))
	    parcial3= parseFloat(leer("digite la tercera nota"))
	    promedioP = (parcial1+parcial2+parcial3)/3
	    notasParcial = promedioP*0.55
	    examen_final= parseFloat(leer("digite la nota del examen final: "))
	    notaExamen = examen_final*0.3
	    notaTrabajo= parseFloat(leer("digite la nota del trabajo final: "))
	    notaFinalTrabajo = notaTrabajo * 0.15
	    notaFinal= notasParcial + notaExamen + notaFinalTrabajo;
	    escribir.log("la calificacion final es: ",notaFinal)
    }
}
let a = new algoritmo ()
a.algoritmo11 ()