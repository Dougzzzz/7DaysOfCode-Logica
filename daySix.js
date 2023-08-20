let supply
let type
let wantToAdd = "sim"
let fruits = []
let dairyProducts = []
let frozen = []
let candy = []
const list = [fruits,dairyProducts,frozen,candy]

while (wantToAdd === "sim") {
    
    const anyArrayNotEmpty = list.some(array => array.length > 0);
    
    if (wantToAdd ==="sim" && anyArrayNotEmpty === true) {
        wantToAdd = prompt("Deseja adcionar uma mercadoria a lista de compras?(Responda sim ou não) Caso queira remover uma mercadoria, digite remover")

        if (wantToAdd === "sim"){
            addItens()

        } else if (wantToAdd === "remover") {
            removeItens()
            wantToAdd = "sim"

        } else if(wantToAdd === "não"){
            break
                
        } else {
            alert("Por favor digite sim, não ou remover")
            wantToAdd = "sim"
        }


    } else if (wantToAdd ==="sim" && anyArrayNotEmpty === false){
        wantToAdd = prompt("Deseja adcionar uma mercadoria a lista de compras?(Responda sim ou não)")

        if (wantToAdd === "sim"){
            addItens()

        } else if(wantToAdd === "não"){
            break
                
        } else {
            alert("Por favor digite sim ou não")
            wantToAdd = "sim"
        }
    }

}


function removeItens() {
    printList()
    let itenToRemove = prompt("Digite o nome do item que deseja remover da lista")

    if (fruits.includes(itenToRemove)){
        index = fruits.indexOf(itenToRemove)
        fruits.splice(index,1)
        alert(`O item ${itenToRemove} foi removido da lista`)
        printList()

    } else if (dairyProducts.includes(itenToRemove)){
        index = dairyProducts.indexOf(itenToRemove)
        dairyProducts.splice(index,1)
        alert(`O item ${itenToRemove} foi removido da lista`)
        printList()

    } else if (frozen.includes(itenToRemove)){
        index = frozen.indexOf(itenToRemove)
        frozen.splice(index,1)
        alert(`O item ${itenToRemove} foi removido da lista`)
        printList()

    } else if (candy.includes(itenToRemove)){
        index = candy.indexOf(itenToRemove)
        candy.splice(index,1)
        alert(`O item ${itenToRemove} foi removido da lista`)
        printList()
    } else {
        alert(`O item ${itenToRemove} não foi encontrado na lista`)
    }
}

function addItens() {
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
    
}

function printList() {
    
    console.log(`Segue sua lista de compras: \n
    Frutas: ${fruits}\n
    Laticínios: ${dairyProducts}\n
    Congelados: ${frozen}\n
    Doces: ${candy}
    `)
}

printList()
