const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo6(){
        let horas, minutos,seg
        let horas_seg, minutos_seg, total_seg 
        horas=0;minutos=0;seg=0;horas_seg=0;minutos_seg=0;total_seg=0
        horas= parseInt (leer ("Digite las horas: "))
        minutos= parseInt (leer ("Digite los minutos: "))
        seg= parseInt (leer ("Digite los segundos: "))
        horas_seg= horas * 3600
        minutos_seg= minutos * 60
        total_seg= horas_seg + minutos_seg + seg
        escribir.log("los segundo equivalentes son: ",total_seg)
    }
}
let a =new algoritmo ()
a.algoritmo6 ()