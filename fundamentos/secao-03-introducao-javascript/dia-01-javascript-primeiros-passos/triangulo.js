let ang1=50;
let ang2=40;
let ang3=90;
let soma = ang1+ang2+ang3;

if(soma===180){
    console.log(`Os ângulos  ${ang1}o ${ang2}o ${ang3}o formam um triângulo`)
} else{
    let falta= 180-soma
    console.log("Os ângulos não formam um triângulo, falta " + falta+ " para formar um triângulo" );
}