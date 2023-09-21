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
    resultado = document.getElementById('resultado').innerHTML;

    var valor;
    var r;

    //Caso tenham operações em sequência, faz um recorte da operação especial para calcular individualmente e depois substitui pelo resultado na calculadora
    if(isNaN(resultado)){
        for(var i=resultado.length-1; i>=0; i--){
            if(isNaN(resultado[i])){
                valor = resultado.slice(i+1, resultado.length);
                r = resultado.slice(0, i+1);
                break;
            }
        }
    } else{
        r = '';
        valor = resultado;
    }
    
    
    if(op == '√'){
        r = r + Math.sqrt(valor);
    } else if(op == 'x²'){
        r = r + Math.pow(valor, 2);
    } else if(op == 'n!'){
        r = r + fatorial(valor);
    }
    
    document.getElementById('resultado').innerHTML = r;

}

function fatorial(n){
    if(n < 0){
        return -1;
    } else if(n == 0){
        return 1;
    } else{
        return (n*fatorial(n-1));
    }
}
