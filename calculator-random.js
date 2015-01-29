// get elementby id-> inner html->split("*") t separaen 2 partes luego convertir en int luego sumar y conertir en caracter y meter en el inner html del elemento res


function calc(){
	var op = document.getElementById("op");
        var sentence = op.innerHTML;
	var parts = sentence.split("+") ;
	var a = parseInt(parts[0]);
	var b = parseInt(parts[1]);	
	var c = a+b;
	var result = c.toString();
	changer("res",result);
};

function genNum(){
	var a = Math.round(Math.random() * 100000000000000); 
	var b = Math.round(Math.random() * 100000000000000); 
	var sentence = a.toString() + "+" + b.toString();
	changer("op",sentence);
	

};
function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
};
