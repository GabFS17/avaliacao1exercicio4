//VARIABLES
const botoes = document.querySelectorAll('.botao'); //botões de operação aritmética
//placeholders pra mostrar os números:
const labelResultado = document.getElementById('labelResultado');
const labelNum1 = document.getElementById('labelNum1');
const labelNum2 = document.getElementById('labelNum2');
//declarar os valores dos numeros
var num2 = 0;
var num1= 0;

//FUNCTIONS
//operações
function dividir(n1, n2) {
    var result = n1 / n2;
    labelResultado.innerText = result;
}
function multiplicar(n1, n2) {
    var result = n1 * n2;
    labelResultado.innerText = result;
}
function subtrair(n1, n2) {
    var result = n1 - n2;
    labelResultado.innerText = result;
}
function somar(n1, n2) {
    var result = n1 + n2;
    labelResultado.innerText = result;
}

function requestNum1() {
    //solicita um número e o transforma em float
    num1 = parseFloat(prompt('Digite o primeiro numero:'));

    //verifica se num1 é um número válido
    if (num1 <= 0 || num1 > 0) {
        labelNum1.innerText = num1
    }
    else {
        alert('Você não digitou um número válido.');
        requestNum1();
    }
}

function requestNum2() {
    num2 = parseFloat(prompt('Digite o segundo numero:'));
    if (num2 <= 0 || num2 > 0) {
        labelNum2.innerText = num2
    }
    else {
        alert('Você não digitou um número válido.');
        requestNum2();
    }
}

requestNum1();
requestNum2();

//adicionar event listener para clique do botão e efetuar a operação respectiva
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        tipo = botao.classList;
        //dividir
        if (tipo == 'botao div') {
            var run = true;
            //não executar caso o operador for 0
            switch (num2) {
                case 0:
                    alert('Impossível dividir por 0!')
                    run = false
                    break;
            }
            switch (run) {
                case true:
                    dividir(num1, num2)
                    break;
            }
        }
        //multiplicar
        else if (tipo == 'botao multi') {
            multiplicar(num1, num2)
        }
        //subtrair
        else if (tipo == 'botao sub') {
            subtrair(num1, num2)
        }
        //somar
        else {
            somar(num1, num2)
        }
    })
});