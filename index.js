
let cards = []
let sum = 0
let isBlackJack = false
let isAlive = false
let message = ""
let player = {
    name: "Munir",
    chips: 150
}
document.getElementById("player-el").textContent = player.name + ":$" +player.chips
function getRandomCard() {
    let randomCard = Math.floor(Math.random()*10) + 2
    return randomCard
}
function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    isAlive = true
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    if (sum <= 20) {
        message = "do u want to draw a new card"
    } else if (sum === 21) {
        message = "u have got black jack"
        isBlackJack = true
    }else {
        isAlive = false
    message = "u are out of the game"
    }
    document.getElementById("sum-el").textContent = "sum: " + sum
    document.getElementById("message-el").textContent = message
    document.getElementById("card-el").textContent = "card: "
    for(let i=0; i<cards.length; i++) {
      
       document.getElementById("card-el").textContent += cards[i] + " "
    }
    
}
function newCard() {
    if (isAlive == true && isBlackJack == false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards);
        renderGame()   
    } else if(isAlive==false) {
            document.getElementById("message-el").textContent = "start the game first"
    }
   
}