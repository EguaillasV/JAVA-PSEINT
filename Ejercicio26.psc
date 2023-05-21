// Ejercicio26: Se desea calcular independientemente la suma de los números pares e impares 
// comprendidos entre 1 y 50.
Proceso Ejercicio26
	Definir suma_pares , suma_impares , i como enteros ;
	suma_pares <- 0  ;
	suma_impares <- 0 ;
	Para i<-2 Hasta 49 Hacer
		Si i mod 2 = 0 Entonces
			suma_pares <- suma_pares + i;
		SiNo
			suma_impares <- suma_impares + i;
		FinSi
		Escribir "La suma pares es:", suma_pares ;
		Escribir "La suma impares es", suma_impares ;
	FinPara
FinProceso
