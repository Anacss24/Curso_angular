// Capturar o elemento de entrada 
let input = document.getElementById('usuario')
let submit = document.getElementById('botao')


// Adicionar um evento de entrada ao campo 
 submit.addEventListener('click', function (){
    // Captura o valor inserido pelo usuário
    var valor = parseInt(input.value)
    
    var tabuada = '';
    
    for (i = 1; i <= 10; i++) {
    
        tabuada += valor + ' x ' + i + ' = ' + (valor * i) + '<br>';
    }

    document.getElementById("resposta").innerHTML = tabuada
});







