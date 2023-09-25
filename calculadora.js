// Insere o dígito no campo de resultado
function inserir(num) {
    var valor = document.getElementById('resultado').innerHTML;
    

    document.getElementById('resultado').innerHTML = valor + num;
console.log(valor);
}

// Limpa o campo de resultado ao clicar na tecla C
function limpar() {
    document.getElementById('resultado').innerHTML = '';
}

//Apaga o último valor digitado
function apagar() {
    var resultado = document.getElementById('resultado').innerHTML;

    if ((resultado[resultado.length - 1]) == 'd') {
        resultado = resultado.slice(0, -3);
    } else if ((resultado[resultado.length - 1]) == '!') {
        resultado = resultado.slice(0, -2);
    } else if ((resultado[resultado.length - 1]) == '²') {
        resultado = resultado.slice(0, -2);
    } else {
        resultado = resultado.slice(0, -1);
    }

    document.getElementById('resultado').innerHTML = resultado;
}

//Faz o cálculo das operações de +, -, *, /
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    addHistorico(resultado, 1);

    // Se a expressão tiver o operador mod ou %, chama a função calcularEspecial
    if (resultado.indexOf('mod') > -1 || resultado.indexOf('%') > -1) {
        calcularEspecial(resultado);
        return;
    } else { //Se não, faz o cálculo normalmente
        var r = eval(resultado);
        r = r.toFixed(2).replace(/[.,]00$/, "");

        document.getElementById('resultado').innerHTML = r;
        addHistorico(resultado, 2);
    }
}

//Função para calcular mod e percentual
function calcularEspecial(resultado) {
    //se o operador for mod, faz o cálculo do resto de uma divisão
    if (resultado.indexOf('mod') > -1) {
        var resultado = document.getElementById('resultado').innerHTML;
        var r = resultado.split('mod');
        var valor = r[0] % r[1];
        document.getElementById('resultado').innerHTML = valor;
        addHistorico(resultado, 2);
    } else {
        //se o operador for %, faz o cálculo do percentual
        var resultado = document.getElementById('resultado').innerHTML;
        var r = resultado.split('%');
        var valor = r[0] * r[1] / 100;
        document.getElementById('resultado').innerHTML = valor;
        addHistorico(resultado, 2);
    }
}

//Função pra manipular as demais operações
function calcular_extra(op) {
    resultado = document.getElementById('resultado').innerHTML;

    var valor;
    var r;

    //Caso tenham operações em sequência, faz um recorte da operação especial para calcular individualmente e depois substitui pelo resultado na calculadora
    if (isNaN(resultado)) {
        for (var i = resultado.length - 1; i >= 0; i--) {
            if (isNaN(resultado[i])) {
                valor = resultado.slice(i + 1, resultado.length);
                r = resultado.slice(0, i + 1);
                break;
            }
        }
    } else {
        r = '';
        valor = resultado;
    }

    //Faz o cálculo de acordo com a operação escolhida
    if (op == '√') {
        addHistorico(resultado, 3);
        r = r + Math.sqrt(valor);
    } else if (op == 'x²') {
        addHistorico(resultado, 4);
        r = r + Math.pow(valor, 2);
    } else if (op == 'n!') {
        addHistorico(resultado, 5);
        r = r + fatorial(valor);
    }
    //Substitui o resultado na calculadora
    document.getElementById('resultado').innerHTML = r;
    //Adiciona o resultado no histórico
    addHistorico(resultado, 2);
}

//Função para calcular o fatorial
function fatorial(n) {
    if (n < 0) {
        return -1;
    } else if (n == 0) {
        return 1;
    } else {
        return (n * fatorial(n - 1));
    }
}

//Função para limpar o histórico
function limparHistorico() {
    document.getElementById('historico-texto').innerHTML = '';
}

//Função para adicionar o histórico
function addHistorico(resultado, tipo) {
    var resultado = document.getElementById('resultado').innerHTML;
    var historico = document.getElementById('historico-texto').innerHTML;

    console.log(resultado);
    console.log(historico);
    console.log(tipo);

    //formatação do histórico de acordo com a função chamada
    switch (tipo) {
        case 1:
            document.getElementById('historico-texto').innerHTML = historico + resultado + '=\n';
            break;
        case 2:
            document.getElementById('historico-texto').innerHTML = historico + resultado + '\n';
            break;
        case 3:
            document.getElementById('historico-texto').innerHTML = historico + '√' + resultado + '=\n';
            break;
        case 4:
            document.getElementById('historico-texto').innerHTML = historico + resultado + '²=\n';
            break;
        case 5:
            document.getElementById('historico-texto').innerHTML = historico + resultado + '!=\n';
            break;
    }
    
    //Faz o scroll automático do histórico
    var textarea = document.getElementById('historico-texto');
    textarea.scrollTop = textarea.scrollHeight;

}