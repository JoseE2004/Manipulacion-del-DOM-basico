// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResult  = document.querySelector('#result');


/*/----Texto normar / concatenacion
function btnOnClick(){
  console.log(input1.value + input2.value);
}*/

//---
function btnOnClick(){
  const sumaImputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaImputs;
}
