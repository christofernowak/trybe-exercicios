const myRemove = require('./myRemove');

describe('requisitos' , () => {
it ('retorna array sem elemento' , () => {
  expect(myRemove([1,2,3,4],3)).toEqual([1,2,4]);
});
it ('não retorar o array inteiro',() => {
  expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);  
});
it ('retornar o array esperado',() => {
    expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4]);  
  });

});