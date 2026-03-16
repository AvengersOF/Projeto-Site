// Abre e fecha o menu lateral
function toggleMenu() {
  let menu = document.getElementById("menu")
  if (menu.style.left === "0px") {
    menu.style.left = "-250px"
  } else {
    menu.style.left = "0px"
  }
}

// Salva um personagem no Local Storage
function salvarPersonagem(personagem) {
  let personagens = JSON.parse(localStorage.getItem("meusPersonagens")) || []
  personagens.push(personagem)
  localStorage.setItem("meusPersonagens", JSON.stringify(personagens))
}

// Carrega e mostra todos os personagens salvos na área de cards
function carregarPersonagens() {
  let personagens = JSON.parse(localStorage.getItem("meusPersonagens")) || []
  let area = document.getElementById("areaCards")
  area.innerHTML = "" // Limpa antes de adicionar
  personagens.forEach(p => {
    let card = `
      <div class="card">
        <img src="${p.avatar}" alt="Avatar do personagem">
        <h2>${p.nome}</h2>
        <p class="raridade">${p.raridade}</p>
        <div class="status">
          <p>❤️ Vida: <span>${p.vida}</span></p>
          <p>⚔️ Ataque: <span>${p.ataque}</span></p>
          <p>🛡️ Defesa: <span>${p.defesa}</span></p>
          <p>💨 Velocidade: <span>${p.velocidade}</span></p>
        </div>
      </div>
    `
    area.innerHTML += card
  })
}

// Gera um novo card de personagem e adiciona na tela
function gerarCard() {
  // Avatar aleatório
  let seed = Math.floor(Math.random() * 100000)
  let avatar = "https://api.dicebear.com/7.x/adventurer/svg?seed=" + seed

  // Status aleatórios
  let vida       = Math.floor(Math.random() * 100) + 50
  let ataque     = Math.floor(Math.random() * 50)  + 10
  let defesa     = Math.floor(Math.random() * 50)  + 10
  let velocidade = Math.floor(Math.random() * 40)  + 10

  // Nome aleatório
  let nomes = ["Drakon", "Zerath", "Kael", "Nyx", "Orion", "Ragnar", "Atlas", "Vex", "Luna", "Fenrir", "Astra", "Drax", "Sable", "Thorne", "Valkyrie", "Zephyr", "Nyssa", "Kairo", "Seraph", "Vesper", "Riven", "Eclipse", "Solara", "Griffin", "Ember", "Shadow", "Phoenix", "Vortex", "Siren", "Dusk", "Blaze", "Nova", "Onyx", "Rogue"]
  let nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)]

  // Raridade aleatória
  let raridadeLista = ["Comum", "Raro", "Épico", "Lendário"]
  let raridade = raridadeLista[Math.floor(Math.random() * raridadeLista.length)]

  // Monta o objeto do personagem
  let personagem = { avatar, nome: nomeAleatorio, raridade, vida, ataque, defesa, velocidade }

  // Salva no Local Storage
  salvarPersonagem(personagem)

  // Monta o card em HTML e adiciona na tela
  let card = `
<div class="card card-animado">
   <img src="${avatar}" alt="Avatar do personagem">
   <h2>${nomeAleatorio}</h2>
   <p class="raridade">${raridade}</p>

   <div class="status">
      <p>❤️ Vida: <span>${vida}</span></p>
      <p>⚔️ Ataque: <span>${ataque}</span></p>
      <p>🛡️ Defesa: <span>${defesa}</span></p>
      <p>⚡ Velocidade: <span>${velocidade}</span></p>
   </div>
</div>
`

document.getElementById("areaCards").innerHTML += card;
}

// Carrega personagens salvos ao abrir a página
window.onload = function() {
  carregarPersonagens()
}