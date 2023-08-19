
const programmingLanguage = prompt("Olá, qual área você deseja se especializar? Digite 1 para Front-End e 2 para Back-End")

if (programmingLanguage == 1) {
   const frontEnd = prompt("No Front-End, deseja se especializar em React ou Vue? Digite 1 para React e 2 para Vue") 
        if (frontEnd == 1){
            const FrontSpec = prompt("Deseja continuar se especializando em React(digite 1) ou irá buscar se tornar fullstack(digite 2)?")
            if (FrontSpec == 1) {
                alert("Você quer se especializar em Front-End e estudar React, buscando entender cada vez melhor o framework")
            } else if (FrontSpec == 2) {
                alert("Você quer se especializar em Front-End e estudar React, buscando se desenvolver para se tornar Fullstack")
            } else { 
                alert("Você digitou um caractere invalido, por favor atualize a pagina e recomece")
            }
        } else if (frontEnd == 2){
            const FrontSpec = prompt("Deseja continuar se especializando em Vue(digite 1) ou irá buscar se tornar fullstack(digite 2)?")
            if (FrontSpec == 1) {
                alert("Você quer se especializar em Front-End e estudar Vue, buscando entender cada vez melhor o framework")
            } else if (FrontSpec == 2) {
                alert("Você quer se especializar em Front-End e estudar Vue, buscando se desenvolver para se tornar Fullstack")
            } else { 
                alert("Você digitou um caractere invalido, por favor atualize a pagina e recomece")
            }
        }
} else if (programmingLanguage == 2) {
    const backEnd = prompt("No Back-End, deseja se especializar em C# ou Java? Digite 1 para C# e 2 para Java")
    if (backEnd == 1){
        const backSpec = prompt("Deseja continuar se especializando em C#(digite 1) ou irá buscar se tornar fullstack(digite 2)?")
        if (backSpec == 1) {
            alert("Você quer se especializar em Back-End e estudar C#, buscando entender cada vez melhor o framework")
        } else if (backSpec == 2) {
            alert("Você quer se especializar em Back-End e estudar C#, buscando se desenvolver para se tornar Fullstack")
        } else { 
            alert("Você digitou um caractere invalido, por favor atualize a pagina e recomece")
        }
    } else if (backEnd == 2){
        const backSpec = prompt("Deseja continuar se especializando em Java(digite 1) ou irá buscar se tornar fullstack(digite 2)?")
        if (backSpec == 1) {
            alert("Você quer se especializar em Back-End e estudar Java, buscando entender cada vez melhor o framework")
        } else if (backSpec == 2) {
            alert("Você quer se especializar em Back-End e estudar Java, buscando se desenvolver para se tornar Fullstack")
        } else { 
            alert("Você digitou um caractere invalido, por favor atualize a pagina e recomece")
        }
    }

} else { 
    alert("Você digitou um caractere invalido, por favor atualize a pagina e recomece")
}

const techs = []
let wantLearn = 0
while (wantLearn != 1) {
    wantLearn = prompt("Quais as linguagens você gostaria de conhecer ou aprender? Caso queira encerrar digite 1")
    if (wantLearn != 1) {
        techs.push(wantLearn)
    } else if (wantLearn == 1){
        break
    }
    
}

const msg = alert(`Você deseja conhecer as seguintes linguagens: ${techs}`)
