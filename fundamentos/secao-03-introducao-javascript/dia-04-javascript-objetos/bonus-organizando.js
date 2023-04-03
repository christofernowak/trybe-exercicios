let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
//   function novoTurno(noite){
//     lesson2['turno'] = 'noite';
//   }
//   return novoTurno('noite');
  
//   function chaves(listarKeys) {
//     let objetos = Object.keys(lesson1);
//   }
//   return chaves;
// //Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
// function tamanhoObjeto (tamanho){
//     for (let comprimento of lesson1.materia.length);
//     return  comprimento = tamanhoObjeto(tamanho.length);
// }

Object.assign(lesson1, allLessons);
console.log(allLessons);