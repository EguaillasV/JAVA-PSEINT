//Ejercicio16: Leer 2 n�meros;si son iguales que los multiplique, si el 
//primo es mayor que el segundo que los reste y si no que los sume. 


Proceso Ejercicio16
	Definir num1,num2,resultado como reales;
	Escribir "Digite dos n�meros";
	leer num1, num2;
	
	Si num1= num2 Entonces 
		// Si son iguales multiplicamos 
		resultado <- num1 * num2 ; 
	SiNo 	
		Si num1 > num2 Entonces
			// Si el primer n�mero es mayor los restamos 
			resultado <- num1 - num2 ;
		Sino 
			resultado<- num1 + num2;
			
		FinSi
	FinSi
	
	Escribir "El resultado es:", resultado; 
	
	
FinProceso
