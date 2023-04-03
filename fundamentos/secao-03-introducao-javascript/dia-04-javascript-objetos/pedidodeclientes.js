let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    // Adicione abaixo as informações necessárias.
    let entregador = order.order.delivery.deliveryPerson;
    let cliente = order.name;
    let telefone = order.phoneNumber;
    let end = order.address.street;
    let numeroCasa = order.address.number;
    let complemento = order.address.apartment;
    console.log(`Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, R: ${end}, ${numeroCasa}, ${complemento}`);
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    let novocliente = 'Luiz Silva';
    let valor = 'R$50,00'
    let pedidoCliente = Object.keys(order.order.pizza);
    let bebida = order.order.drinks.coke.type;
    console.log(`Olá ${novocliente}, o valor total de seu pedido de ${pedidoCliente} e ${bebida} é de ${valor}.`);
  }
  
  orderModifier(order);