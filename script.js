let peso = prompt("Insira seu peso")
let altura =  prompt("Insira sua altura")

let imc =  peso/altura**2

if(imc <=18.5){
    console.log("Seu IMC é "+imc.toFixed(2)+" você está muito magro")
}
if(imc >=18.5 && imc <=24.9){

    console.log("Seu IMC é "+imc.toFixed(2)+" você está dentro da media")
}
if(imc >=25 && imc <=29.9){

    console.log("Seu IMC é "+imc.toFixed(2)+" você está com sobrepeso")
}

if(imc >=30 && imc <=39.9){

    console.log("Seu IMC é "+imc.toFixed(2)+" você está com obesidade")

}
if(imc >=40 ){

    console.log("Seu IMC é "+imc.toFixed(2)+" você está com obesidade grave")
    
}
if(isNaN(imc)){
    console.log("Insira um valor valido para peso e altura")
}
