function Validar() {
	// Declarar las variables
	var U,C;
	//Recuperar los datos 
	U=document.getElementById("Usu").value;
	C=document.getElementById("Con").value;
	//validar los datos 
	if (U=="Fati"&&C=="123"){
		alert("Usuario y Contraseña Correctos");
		window.open("pesoGalactico.html");
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}
	else{
		alert("Usuario y Contraseña Incorrectos");
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}

}