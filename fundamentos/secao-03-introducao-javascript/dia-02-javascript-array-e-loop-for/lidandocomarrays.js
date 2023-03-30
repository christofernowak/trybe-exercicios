let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

//Some todos os valores contidos no array e imprima o resultado.

for(index=0;index<numbers.length;index+=1){

    let resultado = (numbers[index]);

    soma += resultado
   
}

console.log('O resultado da soma é: '+ soma);

//Calcule e imprima a média aritmética dos valores contidos no array.

let media = soma/numbers.length

console.log("A média da soma é "+ media)

//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

if(soma>20 ){
    console.log('Valor maior que 20');

} else{
    console.log('Valor menor ou igual a 20');
}

//Utilizando for, descubra o maior valor contido no array e imprima-o.

let maiorNumero = 0;
for(index=0;index<numbers.length;index+=1){
    
    
    if (numbers[index]> maiorNumero ) {
        maiorNumero = numbers[index];
       
    }
   
}
console.log('O maior número é '+ maiorNumero)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let numeroImpar;
let imparsoma=0



for(index=0;index<numbers.length;index+=1){
    if(numbers[index]%2 !==0){
        numeroImpar = ('Os números impares são ' + numbers[index]);
        console.log(numeroImpar);

        imparsoma++
        
    } 
    

} 
console.log('Quantidade de números impares '+ imparsoma);

    if (imparsoma===0) {
    console.log('Não há numeros impares');
    
}

//Utilizando for, descubra o menor valor contido no array e imprima-o.

let menorNumero = Math.min(...numbers); 
console.log('O menor número é '+ menorNumero)

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let array=[];
let numeros=1
for(let index=1; index<=25;index+=1 ){
    array.push(index);
    

}   
console.log(array);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let div=0
for(let index=0; index<array.length;index+=1){
div=array[index]/2;
console.log(div);

}

