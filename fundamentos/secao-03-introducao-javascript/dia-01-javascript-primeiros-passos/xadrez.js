let peca = "cavalo";
switch(peca){
case "peão":
console.log("Pode mover 2 casas na saida reto, apenas 1 movimento depois de sair para frente, seu ataque é 1 movimento na diagonal");
break;
case "torre":
console.log("Pode se mover verticalmente ou horizontalmente quantas casas vazias quiser.");
break;
case "bispo":
console.log("Pode se mover na diagonal quantas casas vazias quiser");
break;
case "cavalo":
console.log("Seu movimento é em L e pode saltar outras peças em seu caminho");
break;
case "rei":
console.log("Pode mover 1 casa em qualquer direção vazia desde que não entre no campo do inimigo");
break;
case "rainha":
console.log("Pode se mover em todas as direções quantas casas vazias quiser");
break;
}