const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo25(){
        let calificacion_promedio,calificacion_baja 
        let calificacion,suma 
        let i 
        suma = 0 
        calificacion_baja = 99999;
        for (i=1 ;i<= 10; i++<= 1){
            calificacion=parseInt(leer(i+".digite una calificacion: "));
            
            suma =suma + calificacion;
        
            if (calificacion < calificacion_baja) {
                calificacion_baja = calificacion;
            }
        }
        calificacion_promedio = suma/10;
        escribir.log("la calificacion promedio es: ",calificacion_promedio); 
        escribir.log("la calificacion mas baja es: ",calificacion_baja);
    }
}    
let a = new algoritmo ()
a.algoritmo25 ()
