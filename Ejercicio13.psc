//Ejercicio13c - condicionales : Ingrese un número entero y 
//reportelo si es par o impar.


Proceso ejercicio13
	Definir num como entero ;
	
	Escribir "Digite un número:";
	Leer num; 
	
	Si num mod 2 = 0 entonces ; 
		Escribir "El número", num, "es par";
    SiNo 
		Escribir "El número", num , "es impar";
	FinSi

FinProceso
