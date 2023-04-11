const irmao = document.createElement('div');
irmao.innerHTML = '<b>um texto para o elemento</b>'
irmao.style.backgroundColor = 'red'
let parent = document.getElementById('primeiroFilho')
parent.appendChild(irmao)