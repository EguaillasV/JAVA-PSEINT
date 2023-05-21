const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo26(){
        let num  
        let i,factorial 
        do{
            num=parseInt(leer ("digite un numero: "))
        }while (num>=0)
            i = 1
            factorial = 1
        while (i<=num) {
            factorial = factorial*i
            i = i+1
        }
            escribir.log("el factorial es: ",factorial); 
    
    }
}
let a =new algoritmo ()
a.algoritmo26 ()