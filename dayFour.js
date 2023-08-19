let numSort = Math.floor(Math.random() * (10 - 0 + 1) + 0)

let trys = 3

while (trys > 0) {
    let guess = prompt("Digite um número entre 0 e 10")
    
    if (guess < 0 || guess > 10) {
        console.log("Por favor digite um número entre 0 e 10")
    
    } else if (guess == numSort) {
        console.log("Parabéns!! Você adivinhou o número")
        break
    } else if (guess >= 0 && guess <= 10){
        console.log(`Você errou, tente novamente. Você possui ${trys} tentativas`)
        trys = trys - 1
    }

}