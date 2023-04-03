//Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função

/*function adicionar(novocliente){
    if( typeof novocliente === 'string'){
    clientesTrybeBank.push(novocliente);
        return 'Cliente adicionado com sucesso'
    }   else{
    return "Adicione um nome correto."
    }
}

console.log(adicionar('Maria'))
console.log(clientesTrybeBank)*/

function excluir(remover) {

    
    if ( typeof remover === 'string') {
        
        let clienteencontrado = false;

               
        for(let index=0;index<clientesTrybeBank.length;index+=1) {
            if (remover === clientesTrybeBank[index]){
                clientesTrybeBank.splice(index,1);
                clienteencontrado = true;
                return 'Cliente removido com sucesso'
            }
        }
         
        if(clienteencontrado === false) {
            return 'Cliente não encontrado';
        }


    }   else {

    return "Adicione um nome correto."
    }
}

console.log(excluir('Ada'))
console.log(clientesTrybeBank)