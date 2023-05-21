Proceso Ejercicio21
	Definir opcion Como Entero;
	Escribir 'Menú';
	Escribir '1.elevar un número a una potencia X';
	Escribir '2.Sacar la raíz cuadrada de un número';
	Escribir '3.Salir';
	Escribir 'Digite una opción:';
	Leer opcion;
	Segun opcion Hacer
		1:
			Definir num,pot,resultado Como Real;
			Escribir 'Digite un número:';
			Leer num;
			Escribir 'Digite la potencia';
			Leer pot;
			resultado <- num^pot;
			Escribir 'El resultado es:',resultado;
		2:
			Definir num,resultado Como Real;
			Escribir 'Digite un número:';
			Leer num;
			resultado <- rc(num);
			Escribir 'El resultado es:',resultado;
		3:
		De Otro Modo:
			Escribir 'Se equivocó de opción de menú';
	FinSegun
FinProceso
