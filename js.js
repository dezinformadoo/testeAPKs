// JavaScript Document
var nome="";
var a = inteiro;
var b, c, d = decimal;

function cadastraNome(){
nome=prompt("Digite seu nome: ");
document.getElementById("nome").innerHTML=nome;
}


function idade(){
a=prompt("Digite sua idade: ");
document.getElementById("idade").innerHTML=a + " anos";
}

function altura(){
b=prompt("Digite sua Altura: ");
document.getElementById("altura").innerHTML=b + " m";
}

function peso(){
c=prompt("Digite seu peso: ");
document.getElementById("peso").innerHTML=c + " Kg";
}

function imc(){
d = c/(b*b);
  
    if(d<=18.5){
        document.getElementById("imc").innerHTML="Você esta magro,  IMC: " + d;
    }
  
    else if(d>18.5 && d<=24.9){
        document.getElementById("imc").innerHTML="Seu peso esta normal,  IMC: " + d;
    }
  
    else if(d>25 && d<=29.9){
        document.getElementById("imc").innerHTML="Seu peso esta elevado,  IMC: " + d;
    }
  
    else if(d>30 && d<=39.9){
        document.getElementById("imc").innerHTML="Você esta bem acima do peso,  IMC: " + d;
    }
  
    else if(d>40){
        document.getElementById("imc").innerHTML="Você esta obeso, IMC: " + d;
    }

}
