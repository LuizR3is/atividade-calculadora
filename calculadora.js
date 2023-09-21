// Insere o dígito no campo de resultado
function inserir(num){
    var valor = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = valor + num;

}

// Limpa o campo de resultado ao clicar na tecla C
function limpar(){
    document.getElementById('resultado').innerHTML = '';
}

//Apaga o último valor digitado
function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;

    if((resultado[resultado.length - 1]) == 'd'){
        resultado = resultado.slice(0,-3);
    } else if((resultado[resultado.length - 1]) == '!'){
        resultado = resultado.slice(0,-2);
    } else if((resultado[resultado.length - 1]) == '²'){
        resultado = resultado.slice(0,-2);
    } else{
        resultado = resultado.slice(0,-1);
    }

    document.getElementById('resultado').innerHTML = resultado;
}

//Faz o cálculo das operações de +, -, *, /
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;

    var r = eval(resultado);
    r = r.toFixed(2).replace(/[.,]00$/, "");

    document.getElementById('resultado').innerHTML = r;

}

//Função pra manipular as demais operações
function calcular_extra(op){
    if(op == '√'){
        
    }

}