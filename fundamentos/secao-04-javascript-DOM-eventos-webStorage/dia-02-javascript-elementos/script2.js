const where = document.getElementById('where-are-you').parentElement
where.style.color = "red"

const first = document.getElementById('first-child-of-child')
first.innerText = 'Adicionando um texto ao primeiro elemento'
first.style.color = 'black'

const primeiroFilho = document.getElementById('first-child').parentElement
console.log(primeiroFilho)