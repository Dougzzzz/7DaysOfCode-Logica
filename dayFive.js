
let supply
let type
let wantToAdd = "sim"
let fruits = []
let dairyProducts = []
let frozen = []
let candy = []

while (wantToAdd === "sim") {
    wantToAdd = prompt("Deseja adcionar uma mercadoria a lista de compras?(Responda sim ou não)")

        if (wantToAdd === "sim"){
        supply = prompt("Digite o nome da mercadoria que deseja adicionar a lista")
        type = prompt(`Digite o numero correspondente a categoria em que ${supply} melhor se encaixa: (1)Frutas, (2)Laticínios, (3)Congelados, (4)Doces`)

            if (type == 1) {
                fruits.push(supply)
                
            }   else if (type == 2) {
                dairyProducts.push(supply)

            }   else if (type == 3) {
                frozen.push(supply)
            
            } else if (type == 4) {
                candy.push(supply)

            }   else {
                alert("Por favor digite o numero correspondente a uma das categorias")
                wantToAdd = "sim"
            }   
        } else if(wantToAdd === "não"){
            break
        
        } else {
            alert("Por favor digite sim ou não")
            wantToAdd = "sim"
        }
}

console.log(`Segue sua lista de compras: \n
Frutas: ${fruits}\n
Laticínios: ${dairyProducts}\n
Congelados: ${frozen}\n
Doces: ${candy}
`)




