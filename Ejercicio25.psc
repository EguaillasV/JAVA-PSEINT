//Ejercicio25:Calcular la suma de los N primeros n�meros.

Proceso Ejercicio25
	Definir N , suma ,i como entero;
	
	Escribir "Digite la cantidad de n�meros a sumarse:";
	Leer N;
	Suma <- 0 ;
	
	Para i <-1 Hasta N Con Paso 1 Hacer
		suma <- suma + i ;
	FinPara
	
	Escribir "La suma es:",suma; 
FinProceso
