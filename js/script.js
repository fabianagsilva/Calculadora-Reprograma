const salarioInput = 
    document.querySelector('#ganho-mes');

const horasDiaInput = 
    document.querySelector('#horas-dia');

    const resposta = 
    document.querySelector('#resposta');

const calcularValorHora = () => {
    const salario = salarioInput.valueAsNumber;
    const horasDia = horasDiaInput.valueAsNumber;
    const diasMes = 22;

    const ganhoPorHora = salario / (diasMes * horasDia);

    resposta.innerHTML = "R$" + ganhoPorHora.toFixed(2);

}
