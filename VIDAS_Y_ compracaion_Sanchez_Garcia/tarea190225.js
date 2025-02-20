//Conpara dos numeros
let dato1 = parseInt(prompt("ingresa tu primer numero"));
let dato2 = parseInt(prompt("ingresa tu segundo numero"));

if (dato1 > dato2){
    console.log("dato1 es mayor que dato2, el valor de dato1 es: " + dato1);
}else if(dato2 > dato1) {
    console.log("dato2 es mayor que dato1, el dato2 es: "+ dato2);
}else if(dato1 == dato2){
    console.log("Los datos son iguales");
}
