let num1 = 40;
let num2 = 40;
let num3 = 50;

if(num1>num2 && num1>num3){
    console.log(num1 +' é o maior número');
}
else if (num2>num1 && num2>num3){
    console.log(num2 +' é o maior número');
}
else if (num3>num1 && num3>num2){
    console.log(num3 +' é o maior número');
}
else{
    console.log('Tem 2 ou mais números iguais');
}