const leer = require ("prompt-sync")()
const escribir = console 
class algoritmo {
    algoritmo15(){
 		
        let num1,num2,resultado 
        num1 = leer("digite el primer numero:")
        num2 = leer("digite el segundo numero:")
        if (num1=num2) {
        resultado= num1*num2;
        }else{
        if (num1>num2) {
        resultado=num1-num2;
            }else{
            resultado=num1+num2;
                }  
            }  
            escribir.log ("el resultado es: ",resultado);
    }
}
let a = new algoritmo ()
a.algoritmo15 ()