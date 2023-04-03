let info = {
    personagem: ['Margarida','Tio Patinhas'],
    origem: ['Pato Donald', 'Christmas on Bear Mountain, Dell`s Four Color Comics'],
    nota: ['Namorada do personagem principal nos quadrinhos do Pato Donald', 'O último MacPatinhas'],
  };

  info['recorrente'] = 'sim';
  console.log (`Bem vinda ${info.personagem}`);
  for(let chaves in info) {
  console.log(chaves);
}
for(let values in info) {
    console.log(info[values]);
}

console.log (info[personagem]);