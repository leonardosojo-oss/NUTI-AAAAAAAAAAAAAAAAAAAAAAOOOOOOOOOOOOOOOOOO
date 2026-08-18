var titulo2 = document.querySelector("h2");
titulo2.textContent = "Clientes";


let paciente = document.querySelector("#primeiro-paciente");
let tdPeso = paciente.querySelector(".info-peso");
let valorPeso = tdPeso.textContent;

let tdAltura = paciente.querySelector(".info-altura");
let valorAltura = tdAltura.textContent;

 
let imc = valorPeso / (valorAltura * valorAltura);


let tdImc = paciente.querySelector('.info-imc');
tdImc.textContent = imc

if(valorPeso < 0 || valorPeso > 350){
    alert("Peso Inválido!");
}
if(valorAltura < 0 || valorAltura > 3.00){
    alert("Altura Inválida!");
}


if (pesoVaido && alturaValida){
    let tdImc = paciente.querySelector(".info-imc");
    tdImc.testContent = imc;
}

