var titulo = document.querySelector(".titulo");
titulo.textContent = "Banana de Pijama";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    console.log(pacientes[i]);
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var PesoValido = validaPeso(peso);
    var AlturaValida = validaAltura(altura);



    if(AlturaValida && PesoValido){
        tdImc.textContent = calculaImc(peso, altura).toFixed(2); 
    } else{
        tdImc.textContent = "Altura ou peso invalido."
        paciente.classList.add("paciente-invalido");
    }

}

titulo.addEventListener("click", function(){
    alert("Clicou no titulo");
});

function calculaImc(peso, altura) {
    let imc = 0
    imc = peso / (altura * altura)
    return imc
}

function validaPeso(peso){
    if(peso <= 0 || peso > 300){
        tdPeso.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido");
        return false;
    } else {
        return true
    }
}

function validaAltura(altura){
    if(altura <= 0 || altura > 3.00){
        console.log("altura invalida");
        tdAltura.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
        return false;
    }else {
        return true
    }
}