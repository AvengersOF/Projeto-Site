// Abre e fecha o menu lateral
function toggleMenu() {
  let menu = document.getElementById("menu")
  if (menu.style.left === "0px") {
    menu.style.left = "-250px"
  } else {
    menu.style.left = "0px"
  }
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
  let nomes = ["Drakon", "Zerath", "Kael", "Nyx", "Orion", "Ragnar", "Atlas", "Vex"]
  let nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)]

  // Raridade aleatória
  let raridadeLista = ["Comum", "Raro", "Épico", "Lendário"]
  let raridade = raridadeLista[Math.floor(Math.random() * raridadeLista.length)]

  // Monta o card em HTML e adiciona na área de cards
  let card = `
    <div class="card">
      <img src="${avatar}" alt="Avatar do personagem">
      <h2>${nomeAleatorio}</h2>
      <p class="raridade">${raridade}</p>
      <div class="status">
        <p>❤️ Vida: <span>${vida}</span></p>
        <p>⚔️ Ataque: <span>${ataque}</span></p>
        <p>🛡️ Defesa: <span>${defesa}</span></p>
        <p>💨 Velocidade: <span>${velocidade}</span></p>
      </div>
    </div>
  `

  document.getElementById("areaCards").innerHTML += card
}
