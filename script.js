function gerarPersonagem(){

let vida = Math.floor(Math.random()*100)+1
let ataque = Math.floor(Math.random()*50)+1
let defesa = Math.floor(Math.random()*50)+1
let velocidade = Math.floor(Math.random()*50)+1

document.getElementById("vida").innerText = vida
document.getElementById("ataque").innerText = ataque
document.getElementById("defesa").innerText = defesa
document.getElementById("velocidade").innerText = velocidade

}