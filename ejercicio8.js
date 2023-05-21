const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo8(){
        let num_hombres,num_mujeres 
        let total_estudiantes 
        let porcentajeH, porcentajeM  
        num_hombres= parseInt (leer ("digite el numero de hombres:"))
       
        num_mujeres= parseInt (leer ("digite el numero de mujeres: "))
       
        total_estudiantes = num_hombres+num_mujeres
        porcentajeH = num_hombres / total_estudiantes * 100;
        porcentajeM = num_mujeres/total_estudiantes * 100;
        console.log( " el porcentaje de hombres es: ",porcentajeH,"%")
        console.log("el porcentaje de mujeres es: ",porcentajeM,"%")
    }
   
}
let a = new algoritmo ()
a.algoritmo8 ()
   