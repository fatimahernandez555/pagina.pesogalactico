function Calcular(){
	// Declarar variables
	var p1,gr,re;
	//Recuperar los valores de las cajas de texto y asignarle una variable
	p1=parseInt(document.getElementById("sis").value);
	gr=parseFloat(document.getElementById("peso").value);
	//Realizar las operaciones
	re= (p1 * gr) / 9.81;
	//Mostrar el resultado en la caja de texto.
	document.getElementById("resul").value=re;
}
function Borrar(){
	document.getElementById("sis").value="";
	document.getElementById("peso").value="";
	document.getElementById("resul").value="";
}
