let numeros = {
    pares: 0,
    ímpares: 0,
  };

  function ParEImpar (numerosInteiros){
    for (let index = 0; index < numerosInteiros.length; index += 1){
    numeros = {
        pares: numerosInteiros % 2 === 0,
        ímpares: numerosInteiros % 2 !== 0,
      };
    }
}
    ParEImpar([2,7,9,14,16,20,25]);