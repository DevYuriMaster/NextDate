//Selecionar os elementos HTML
const dataInicial = document.getElementById('dataInicial');
const ano = document.getElementById('lano');
const mes = document.getElementById('lmes');
const dia = document.getElementById('ldia');
const resultado = document.querySelector('.resultado');
const alerta = document.querySelector('.alerta');
const somar = document.getElementById('soma');
const subtrair = document.getElementById('subtracao');
const limpar = document.getElementById('limpar');

//Eventos
somar.addEventListener('click', somaTudo);
subtrair.addEventListener('click', subTudo);


//Atualizar valor
function valorAtual(valor) {
    resultado.innerText = valor;
    resultado.style.display = 'block';
    alerta.style.display = 'none';
}

function exibirAlerta(novoAlerta) {
    alerta.innerText = novoAlerta;
    alerta.style.display = 'block';
    resultado.style.display = 'none';
}

//Funções 

//Soma geral
function somaTudo() {
    const dataInicialValor = new Date(dataInicial.value);
    const anoValor = parseInt(ano.value) || 0;
    const mesValor = parseInt(mes.value) || 0;
    const diaValor = parseInt(dia.value) || 0;

    if (!dataInicial.value) {
        return exibirAlerta('Por favor, preencha a data inicial!');
    } else if ((!anoValor && !mesValor && !diaValor)) {
        return exibirAlerta('Pelo menos uma das opções devem ser escolhidas para soma ou subtração.');
    }

    const novaData = new Date(dataInicialValor.getFullYear() + anoValor, dataInicialValor.getMonth() + mesValor, dataInicialValor.getDate() + diaValor);
  
    valorAtual(novaData.toLocaleDateString('pt-br', { timeZoneName: 'longOffset', timeZone: 'America/Rio_Branco'}));
}

function subTudo() {
    const dataInicialValor = new Date(dataInicial.value);
    const anoValor = parseInt(ano.value) || 0;
    const mesValor = parseInt(mes.value) || 0;
    const diaValor = parseInt(dia.value) || 0;

    if (!dataInicial.value) {
        return exibirAlerta('Por favor, preencha a data inicial!');
    } else if ((!anoValor && !mesValor && !diaValor)) {
        return exibirAlerta('Pelo menos uma das opções devem ser escolhidas para soma ou subtração.');
    }

    const novaData = new Date(dataInicialValor.getFullYear() - anoValor, dataInicialValor.getMonth() - mesValor, dataInicialValor.getDate() - diaValor);
 
    valorAtual(novaData.toLocaleString('pt-br', { timeZoneName: 'longOffset', timeZone: 'America/Rio_Branco'}));
}

