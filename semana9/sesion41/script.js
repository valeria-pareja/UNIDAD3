const autos = ["audi","bmw","ferrari","fiat","ford","lexus"]; //crear array

let text="";
for(let i=0;i<autos.length; i++) {
    text += '<img src="assets/img/'+autos[i]+ '.png" width="100"></img>';
}

document.getElementById("demo").innerHTML=text; //va al html y busca demo y luego innerhtml introduzca texto

let b1 = document.getElementById("btn.push"); //boton que contenga todo el boton push
b1.onclick = functionPush; //le anexa un evento onclick y al hacer click llame a la funcion

function functionPush(elemento){
    autos.push("saab"); //agrega elemento, en el original ya esta al final const autos
    let text= ""; //para anexar imagen
    for (let i = 0; i < autos.length; i++) { //recorre nueva longitud y agrega la ultima imagen
        text += '<img src="assets/img/'+autos[i]+ '.png" width="100"></img>'; //otro recorrido paar agregar la nueva imagen
    }
    document.getElementById("demo").innerHTML=text; //el doc.get... dentro de la funcion, no sale
}

//tarea: crear el boton de unshift y shift saab o volvo

let b2 = document.getElementById("btn-pop");
b2.onclick = functionPop;

function functionPop() {
    if (autos.length > 0) {
        autos.pop();
        text = "";
        for (let i = 0; i < autos.length; i++) {
            text += '<img src="assets/img/'+ autos[i] +'.png" width="100"></img>';
        }
        document.getElementById("demo").innerHTML=text;
    } else {
        console.log("no puede eliminar más valores porque el arreglo esta vacio");
    }
}

let b3 = document.getElementById("btn-unshift");
b3.onclick = functionUnShift;

function functionUnShift() {
    autos.unshift("volvo");
    text = "";
    for (let i = 0; i < autos.length; i++) {
        text += '<img src="assets/img/'+ autos[i] +'.png" width="100"></img>';
    }
    document.getElementById("demo").innerHTML=text;
}

let b4 = document.getElementById("btn-shift");
b4.onclick = functionShift;

function functionShift() {
    if (autos.length > 0) {
        autos.shift();
        text = "";
        for (let i = 0; i < autos.length; i++) {
            text += '<img src="assets/img/'+ autos[i] +'.png" width="100"></img>';
        }
        document.getElementById("demo").innerHTML=text;
    } else {
        console.log("no puede eliminar más valores porque el arreglo esta vacio");
    }
}