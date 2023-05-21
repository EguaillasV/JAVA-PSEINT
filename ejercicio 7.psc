Algoritmo EJERCICIO1
	Definir horas,minutos,seg Como Entero;
	Definir horas_seg, minutos_seg, total_seg Como Entero;
	Escribir "DIGITE LAS HORAS";
	Leer horas;
	Escribir "digite los minutos";
	Leer minutos;
	Escribir "digite los segundos";
	Leer seg;
	horas_seg<-horas*3600;
	minutos_seg<- minutos*60;
	total_seg<-horas_seg+minutos_seg+seg;
	Escribir "LOS SEGUNDOS EQUIVALENTES SON:",total_seg;
FinAlgoritmo
 