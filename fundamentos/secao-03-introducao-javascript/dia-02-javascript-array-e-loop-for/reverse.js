let palavra = 'trybe';
let palavraInvertida= ''

for(let index=0; index < palavra.length; index+=1){
    palavraInvertida+= palavra[palavra.length-1-index]

}
console.log(palavraInvertida);