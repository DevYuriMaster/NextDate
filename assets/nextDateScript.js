document.addEventListener('DOMContentLoaded', function () {
    const dataInicial = document.getElementById('dataInicial');
    const dataFinal = document.getElementById('dataFinal');
    const resultado = document.querySelector('.resultado');
    const alerta = document.querySelector('.alerta');
    const diferenca = document.getElementById('diferenca');

    moment.locale('pt-br');

    if (diferenca) {
        diferenca.addEventListener('click', difeTudo);
    }

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

    function difeTudo() {
        const dataInicialValor = moment(dataInicial.value);
        const dataFinalValor = moment(dataFinal.value);

        if (!dataInicial.value) {
            return exibirAlerta('A data inicial não foi preenchida!');
        } else if (!dataFinal.value) {
            return exibirAlerta('A data final não foi preenchida!');
        }

        const diferencaDias = dataFinalValor.diff(dataInicialValor, 'days');
        valorAtual(`A diferença é de ${diferencaDias} dias.`);
    }
});