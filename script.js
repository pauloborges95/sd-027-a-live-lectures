function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  const testingScope = (escopo) => (
    escopo === Boolean ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo ! ` :
    `Não devo ser utilizada fora do meu escopo (else)` 
  ); 

  console.log(testingScope());



  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = (a, b) => {
   return a - b;
  
  }
  oddsAndEvens.sort(sortOddsAndEvens);
  console.log(oddsAndEvens); // será necessário alterar essa linha 😉