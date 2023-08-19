let userName = prompt("Qual seu nome?")
let age = prompt("Qual sua idade?")
let programmingLanguage = prompt("Qual a linguagem de programação você está estudando?")

alert(`"Olá ${userName}, você tem ${age} anos e já está aprendendo ${programmingLanguage}!"`)

const isLiking = parseInt(prompt(`Você está gostando de estudar ${programmingLanguage} ? Responda com o número 1 para SIM ou 2 para NÃO.`))

if(isLiking === 1 ) {alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else if (isLiking === 2) {alert("Ahh que pena... Já tentou aprender outras linguagens?")}



