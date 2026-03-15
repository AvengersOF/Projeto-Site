function toggleMenu(){

let menu = document.getElementById("menu")

if(menu.style.left === "0px"){

menu.style.left = "-250px"

}else{

menu.style.left = "0px"

}

}

function gerarCard (){

let seed = Math.floor(Math.random()*100000)

let avatar = document.getElementById("avatar")

avatar.src = "https://api.dicebear.com/7.x/adventurer/svg?seed=" + seed


let vida = Math.floor(Math.random()*100)+50
let ataque = Math.floor(Math.random()*50)+10
let defesa = Math.floor(Math.random()*50)+10
let velocidade = Math.floor(Math.random()*40)+10


document.getElementById("vida").innerText = vida
document.getElementById("ataque").innerText = ataque
document.getElementById("defesa").innerText = defesa
document.getElementById("velocidade").innerText = velocidade


let nomes = [
"Drakon",
"Zerath",
"Kael",
"Nyx",
"Orion",
"Ragnar",
"Atlas",
"Vex"
]

let nomeAleatorio = nomes[Math.floor(Math.random()*nomes.length)]

document.getElementById("nome").innerText = nomeAleatorio


let raridadeLista = ["Comum","Raro","Épico","Lendário"]

let raridade = raridadeLista[Math.floor(Math.random()*raridadeLista.length)]

document.getElementById("raridade").innerText = raridade

}