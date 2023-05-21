Algoritmo sin_titulo
	definir parcial1,parcial2,parcial3,promediop,notasparcial como reales;
	definir examen_final,notaexamen como reales;
	definir notatrabajo,notafinaltrabajo como reales;
	definir notafinal como real;
	Escribir "digite las 3 notas de los parciales";
	Leer parcial1,parcial2,parcial3;
	promediop <- (parcial1+parcial2+parcial3)/3;
	notasparcial <- promediop*55/100;
	Escribir "digite la note del examen final:";
	Leer examen_final;
	notaexamen <- examen_final*30/100;
	Escribir "Digite la nota del trabajo final";
	Leer notatrabajo;
	notafinaltrabajo <- notatrabajo*15/100;
	notafinal <- notasparcial+notaexamen+notafinaltrabajo;
	Escribir "La calificacion final es:",notafinal;
FinAlgoritmo
