var botao = document.querySelector("#adicionar-paciente")

botao.addEventListener("click", function(event){
    event.preventDefault();
    adicionaPaciente();
});

function adicionaPaciente() {
    var tabela = document.querySelector("#tabela-pacientes");

    var nome = document.querySelector("#nome").value;
    var peso = document.querySelector("#peso").value;
    var altura = document.querySelector("#altura").value;
    var gordura = document.querySelector("#gordura").value;

    alert(nome + peso + altura + gordura);

    var pacienteTR = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    var PesoValido = validaPeso(peso);
    var AlturaValida = validaAltura(altura);

    if(AlturaValida && PesoValido){
        imcTd.textContent = calculaImc(peso, altura).toFixed(2); 
    } else{
        imcTd.textContent = "Altura ou peso invalido."
        pacienteTR.classList.add("paciente-invalido");
    }

    pacienteTR.appendChild(nomeTd);
    pacienteTR.appendChild(pesoTd);
    pacienteTR.appendChild(alturaTd);
    pacienteTR.appendChild(gorduraTd);
    pacienteTR.appendChild(imcTd);

    tabela.appendChild(pacienteTR);
}

// continua aula 5