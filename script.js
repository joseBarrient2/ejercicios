function contrasenaValida(contrasena) {
    // "2Fj(jjbFsuj"
    // "eoZiugBf&g9"
    if(contrasena === ''){
        return "Ingrese se contraseña";
    }
    else{

        if (contrasena === "eoZiugBf&g9" || contrasena === "eoZiugBf&g9") {
                return "Contraseña valida";
            }
            return "Contraseña invalida";
    }
    
}

// FORMA 1
function calcEx1(){
    const ex1InputConstrasena =  document.getElementById("ex1-input-contrasena");
    const result = contrasenaValida(ex1InputConstrasena.value)
    alert(result)
}

// FORMA 2

// const ex1ButtonVerificar = document.getElementById("ex1-button-verificar")
// ex1ButtonVerificar.addEventListener("click", function(){
//     const ex1InputConstrasena =  document.getElementById("ex1-input-contrasena")
//     const result = contrasenaValida(ex1InputConstrasena.value)
//     alert(result)
// })

let datosIngreso = document.getElementById('calcular_ingreso');

datosIngreso.addEventListener('click',calcularImpuestos);

function calcularImpuestos(){
    
   let edad = Number(document.getElementById('edad').value);
    let ingresos = Number(document.getElementById('ingresos').value);
    //alert(ingresos);  
    if( edad >= 18 && ingresos >= 1000){
         //alert('si');
         let porcentaje = 40 * ingresos / 100;
         alert(porcentaje);
    }
    else{
        alert(0);
    }
}



let calculaBmi = document.getElementById('calcular_bmi');

calculaBmi.addEventListener('click',calcularBmi);

function calcularBmi(){
    
   let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let altura2 = altura * altura;
    let bmi = peso / altura2;
    console.log(bmi);  
    if( peso != "" && altura != ""){
         //alert('si');
        
         if(bmi < 18.5){
             console.log(bmi + " Bajo de peso");
         }
         else if(bmi >= 18.5 && bmi <= 24.9){
                 console.log(bmi + " Normal");
         }
         else if(bmi >= 25 && bmi <= 29.9){
            console.log(bmi + " Sobrepeso");
         }
         else if(bmi >= 30){
            console.log(bmi + " Obeso");
         }
    
    }
}




let printArrey = document.getElementById('printArrey');
let box_arreglo = document.getElementById('box_arreglo');
let daysWeek = ["Lunes","Marte","Miercoles","Jueves","Viernes","Sabado","Domingo"];

printArrey.addEventListener('click',imprimirArreglo);

function imprimirArreglo(){
    daysWeek.forEach(days => {
        box_arreglo.innerHTML += days + "<br>";
      });
    
}



const numLikes = document.getElementById('numeroLikes');
let btn_likes = document.getElementById('covertir_likes');


btn_likes.addEventListener('click',calcularLikes);

function calcularLikes(){
     let valorLikes = Number(numLikes.value) ;
     
     if(valorLikes < 1000){
        console.log(valorLikes + "");
     }
    else if(valorLikes >= 1000 && valorLikes < 1000000){
     console.log(Math.floor(valorLikes / 1000) + "K");
     }
    else if(valorLikes >= 1000000) {
        console.log(Math.floor(valorLikes / 1000000) +"M");
    }
    
}


const numeroFizz = document.getElementById('numero');
let btn_fizzbuzz = document.getElementById('fizzbuzz');

btn_fizzbuzz.addEventListener('click',fizzBuzz);

function fizzBuzz(){
     let n = (Number(numeroFizz.value));
     if((n % 3) === 0){
        console.log("fizz");
     }
     else if((n % 5) === 0){
        console.log("buzz");
     }
     else if((n % 3 == 0) && (n % 5 == 0)){
        console.log("fizzbuzz");
     }
     else{
        console.log(n);
     }
}


let btn_accion = document.getElementById('imprimeRango').onclick = imprimirRango;

function imprimirRango(){
    let valor1 = Number(document.getElementById('number1').value);
    let valor2 = Number(document.getElementById('number2').value);
             
    for(i = valor1; i< valor2; i++){
        if(i > valor1 && i < valor2){
            console.log(i);
        }
    } 
}


let btn_sumar = document.getElementById('sumarRango').onclick = obtenRango;

function obtenRango(){  
    let valor_1 = Number(document.getElementById('value1').value);
    let valor_2 = Number(document.getElementById('value2').value); 
    let suma= 0;      
    for(v = valor_1; v< valor_2; v++){
        if(v > valor_1 && v < valor_2){
            suma = suma += v;
        }
    } 
    console.log(suma);
}

let btnBuscar = document.getElementById('bnt_busca_texto').onclick = numeroDeAes;

function numeroDeAes(){ 
    let texto = document.getElementById('valorTexto').value;
    let veces = 0;
    for(e=0; e < texto.length; e++){
         if(texto[e] == "a"){
             veces = veces += 1;
             //console.log(texto[e]);
         }   
    }
    console.log('a se repitio: '+ veces + " veces");
}



let btnBuscaCaracter = document.getElementById('bnt_busca_caracteres').onclick = ejecutar;

function ejecutar(){
    let palabra = document.getElementById('palabra').value;
    let caracter = document.getElementById('caracter1').value;
    numeroDeCaracteres(palabra,caracter);
}

function numeroDeCaracteres(word,letra){ 
    
    let nRepeticon = 0;
    //console.log(palabra, caracter);
   for(s=0; s < word.length; s++){
         if(word[s] == letra){
             nRepeticon = nRepeticon += 1;
         }   
    }
    console.log('la letra '+ letra + ' se repitio ' + nRepeticon);
}



function sumarArreglo(){ 
    //let arreglo = document.getElementsByClassName('data');
    let arreglos = prompt("escribe numeros separados por comas ejm: 1,2,3");
    let contenido = arreglos.split(',');
    let result = 0;
    
    for(let k = 0; k < contenido.length; k++){
        result = result += Number(contenido[k]);
    }
    console.log(result);
}


function multiplicaArreglo(){ 
    //let arreglo = document.getElementsByClassName('data');
    let arr = prompt("escribe numeros separados por comas ejm: 1,2,3");
    let conten = arr.split(',');
    let result = [];
   // console.log("c= "+conten.length);
   for(let z = 0; z < conten.length; z++){
       //let multi = conten[z]; //* result;
        result.push(conten[z]);
       //console.log(result);
    }
   let multiplicar = operacionMultiplicar(result);

     console.log(multiplicar);
    
}

function operacionMultiplicar(datos){
    //console.log(datos);
    let valor = 1;
    for(a = 0; a < datos.length; a++){
        valor = datos[a] * valor;

    }
    return valor;
    //console.log(datos);
}


let btn_remove = document.getElementById('btn_remover').onclick = removerCeros;

function removerCeros(){
   let arrayNumber = prompt("escribe numeros separados por comas ejm: 1,2,3");
   let newArrey = arrayNumber.split(',');
   let result = [];
   //console.log(newArrey);
   for(let e = 0; e < newArrey.length; e++){
    if(newArrey[e] > 0){
        result.push(newArrey[e]);
    }
   }
   console.log(result);
}



let btnSumaArr = document.getElementById('arrSuma').onclick = sumarArreglos;


function sumarArreglos(){
    let datosArrey = document.getElementsByClassName("digito");
    let box_array = [];
    for(var e=0; e<datosArrey.length; e++){
       //console.log(datosArrey[e].value);
       box_array.push(datosArrey[e].value);
    }

    let resultado = pedirRango(box_array);

}

function pedirRango(dataArray){
     let rangoInit = prompt("Son 6 valores. Indica la posicion inicial")-1;
     let rangoEnd = 0;
     setTimeout(function(){
        let rangoEnd = prompt("Indica la posicion final")-1;
     },500);
     console.log(rangoInit, rangoEnd);
     
}

