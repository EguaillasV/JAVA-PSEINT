Proceso Ejercicio21
	Definir opcion Como Entero;
	Escribir 'Men�';
	Escribir '1.elevar un n�mero a una potencia X';
	Escribir '2.Sacar la ra�z cuadrada de un n�mero';
	Escribir '3.Salir';
	Escribir 'Digite una opci�n:';
	Leer opcion;
	Segun opcion Hacer
		1:
			Definir num,pot,resultado Como Real;
			Escribir 'Digite un n�mero:';
			Leer num;
			Escribir 'Digite la potencia';
			Leer pot;
			resultado <- num^pot;
			Escribir 'El resultado es:',resultado;
		2:
			Definir num,resultado Como Real;
			Escribir 'Digite un n�mero:';
			Leer num;
			resultado <- rc(num);
			Escribir 'El resultado es:',resultado;
		3:
		De Otro Modo:
			Escribir 'Se equivoc� de opci�n de men�';
	FinSegun
FinProceso
