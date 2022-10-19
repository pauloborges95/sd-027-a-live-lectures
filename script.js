const order = {
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
  
  const customerInfo = (order) => {
    return `Ola ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, n°${order.address.number}, Ap: ${order.address.apartment}`;
    //“Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”.
  };
  console.log(customerInfo(order));
  customerInfo(order);
  
  const orderModifier = (order) => {
    const novoComprador = order.name = 'Luiz Silva';
    const novototal = order.payment.total;
    const saborPizza = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;


    return `Olá ${novoComprador}, o total do seu pedido de ${saborPizza[0], saborPizza[1]} e ${bebida} é R$ ${novototal}`;
    //“Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”
  
  };
  console.log(orderModifier(order));
  orderModifier(order);