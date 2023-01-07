var frutas = ["Manzana", "Cereza", "Fresa"];
console.log(frutas);

//-------------------
var frutas = ["Manzana", "platano", "Cereza", "Fresa"];
frutas 


var masFrutas = frutas.push("uvas");// push agrega elemento al final
frutas 


var ultimo = frutas.pop(5);// pop elimina un elemento final
frutas 


//------------
var nuevaLongitud = frutas.shift("Uvas");
frutas

var nuevaFruta = frutas.unshift("Uvas");
frutas

var nuevaFruta = frutas.shif("Uvas");
frutas

var posicion = frutas.indexOf("Cereza");
frutas[2];

//---------
var estudiantes = ["maria","sergio","rosa"];
function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}

//------------------
var estudiantes = ["maria","sergio","rosa"];
function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}


