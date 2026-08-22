let firstCard = 11
let secondCard = 3
let sum = firstCard + secondCard
let isBlackJack = false
let isAlive = true
let message = ""

function startGame(){
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
    document.getElementById("card-el").textContent = "card: " + firstCard + " " +secondCard
}
