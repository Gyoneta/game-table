let submitName = document.querySelector('#submitName')
let inputName = document.querySelector('#inputName')
let players = []
let victories = []
let defeats = []
let draws = []
let score = []
let playersHtml = ''
let counter = 0

submitName.onclick = function registerName() {
  players.push(inputName.value)
  victories.push(0)
  defeats.push(0)
  draws.push(0)
  score.push(0)

  for (i = counter; i < players.length; i++) {
    playersHtml += `<tr>
  <td id="${inputName.value}">${inputName.value}</td>
    <td id="${i}_victory" ">${victories[i]}</td>
    <td id="${i}_draw">${draws[i]}</td>
    <td id="${i}_defeat">${defeats[i]}</td>
    <td id="${i}_score">${score[i]}</td>
    <td><button onclick="increaseVictoryPoints(${i})">+</button>Vitória<button onClick="decreaseVictoryPoints(${i})">-</button></td>
    <td><button onClick="increaseDrawPoints(${i})">+</button>Empate<button onClick="decreaseDrawPoints(${i})">-</button></td>
    <td><button onClick="increaseDefeatPoints(${i})">+</button>Derrota<button onClick="decreaseDefeatPoints(${i})">-</button></td>
  </tr>`
  }
  console.log(counter)
  console.log(i)

  document.querySelector('#playerTable').innerHTML = playersHtml
  inputName.value = ''
  saveData()
  counter++
}

// saveData tem que ser feito sempre a partir do 0 porque substituir innerHTML = playersHtml substitui todos os valores dnv ao invés de apenas adicionar dados da ultima linha!!
function saveData() {
  for (n = 0; n < players.length; n++) {
    console.log(`${n}_victory`)

    document.getElementById(`${n}_victory`).innerHTML = victories[n]

    document.getElementById(`${n}_defeat`).innerHTML = defeats[n]

    document.getElementById(`${n}_draw`).innerHTML = draws[n]

    calculatePoints(n)
  }
}

function increaseVictoryPoints(i) {
  victories[i] += 1

  document.getElementById(`${i}_victory`).innerHTML = victories[i]

  calculatePoints(i)
}

function decreaseVictoryPoints(i) {
  victories[i] -= 1
  console.log(victories)

  document.getElementById(`${i}_victory`).innerHTML = victories[i]

  calculatePoints(i)
}

function increaseDefeatPoints(i) {
  defeats[i] += 1
  console.log(defeats)

  document.getElementById(`${i}_defeat`).innerHTML = defeats[i]

  calculatePoints(i)
}

function decreaseDefeatPoints(i) {
  defeats[i] -= 1
  console.log(defeats)

  document.getElementById(`${i}_defeat`).innerHTML = defeats[i]

  calculatePoints(i)
}

function increaseDrawPoints(i) {
  draws[i] += 1
  console.log(draws)

  document.getElementById(`${i}_draw`).innerHTML = draws[i]

  calculatePoints(i)
}

function decreaseDrawPoints(i) {
  draws[i] -= 1
  console.log(draws)

  document.getElementById(`${i}_draw`).innerHTML = draws[i]

  calculatePoints(i)
}

function calculatePoints(i) {
  score[i] = victories[i] * 3 - defeats[i] * 1 + draws[i] * 1

  document.getElementById(`${i}_score`).innerHTML = score[i]
}
