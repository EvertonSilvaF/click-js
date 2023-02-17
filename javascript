* como fazer um click em javascript*
// toda vez que clika no p chama função
function yetrtretr(){
    // receber a informação (nome) do usuario
    //var name;
    let name = prompt("qual e o seu nome"); 
    // processar a informação (nome) : maiuscula
    // como bota o texto todo em letras maiuculas condição logo a baixo.
    // r:nome. toUpperCasa();
    var nameProcesado = name.toUpperCase();
    
    // informar na tela a informação processada
    var p = document.querySelector('p');
    p.innerText = "Jogador 1: " + nameProcesado;
}

addEventListener("click", yetrtretr)


