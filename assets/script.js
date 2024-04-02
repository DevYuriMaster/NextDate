//Selecionar os elementos HTML
const dataInicial = document.getElementById('dataInicial');
const ano = document.getElementById('lano');
const mes = document.getElementById('lmes');
const dia = document.getElementById('ldia');
const resultado = document.querySelector('.resultado');
const alerta = document.querySelector('.alerta');
const somar = document.getElementById('soma');
const subtrair = document.getElementById('subtracao');
moment.locale('pt-br');

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
    const dataInicialValor = moment(dataInicial.value);
    const anoValor = parseInt(ano.value) || 0;
    const mesValor = parseInt(mes.value) || 0;
    const diaValor = parseInt(dia.value) || 0;

    if (!dataInicial.value) {
        return exibirAlerta('Por favor, preencha a data inicial!');
    } else if ((!anoValor && !mesValor && !diaValor)) {
        return exibirAlerta('Pelo menos uma das opções deve ser escolhida para soma ou subtração.');
    }

    const novaData = dataInicialValor.add({ years: anoValor, months: mesValor, days: diaValor });

    valorAtual(formatarData(novaData));
}

//Subtração geral 
function subTudo() {
    const dataInicialValor = moment(dataInicial.value);
    const anoValor = parseInt(ano.value) || 0;
    const mesValor = parseInt(mes.value) || 0;
    const diaValor = parseInt(dia.value) || 0;

    if (!dataInicial.value) {
        return exibirAlerta('Por favor, preencha a data inicial!');
    } else if ((!anoValor && !mesValor && !diaValor)) {
        return exibirAlerta('Pelo menos uma das opções deve ser escolhida para soma ou subtração.');
    }

    const novaData = dataInicialValor.subtract({ years: anoValor, months: mesValor, days: diaValor });

    valorAtual(formatarData(novaData));
}

function formatarData(data) {
    const dataFormatada = moment(data).format('dddd, DD [de] MMMM [de] YYYY');
    return `A data resultante será: ${dataFormatada}`;
}