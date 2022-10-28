const newEmployees = () => {
    const employees = {
      id1: geradorEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: geradorEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: geradorEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  
const geradorEmail = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(" ").join("_");
    return {nomeCompleto, email: `${email}@betrybe.com`};
  }
  console.log(newEmployees(geradorEmail));

//=============================================================================================================

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretor = (gabarito, respostasAluno)=>{
  if(gabarito === respostasAluno){
    return 1;
  }
  if(respostasAluno === 'N.A'){
    return 0;
  }
  return -0.5;
}

const pontuador = (gabarito, respostasAluno, compara) => {
  let contador = 0;
  for(let i = 0; i < gabarito.length; i +=1){
     const contaPonto = compara(gabarito[i], respostasAluno[i]);
     gabarito += contaPonto;
  }    
  return `Resultado final ${contador} pontos`
}
console.log(pontuador(RIGHT_ANSWERS, STUDENT_ANSWERS, corretor));
//==========================================================================================================

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((listanomes) => listanomes === name);
};

console.log(hasName(names, 'Ana'));

//==========================================================================================
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((pessoa) => pessoa.age >= minimumAge);
};

console.log(verifyAges(people, 18));

//==================================================================================

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age > b.age ? 1 : -1)

console.log(people);