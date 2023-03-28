let candidato = "aprovada";

switch(candidato){
    case "aprovada":
    console.log("Parabéns, você esta no grupo de pessoas aprovadas!");
    break;
    case "lista":
    console.log("Você esta na nossa lista de espera");
    break;
    case "reprovada":
    console.log("Infelizmente você reprovou");
    break;
    default:
    console.log("Informação incorreta");
    break;
}
