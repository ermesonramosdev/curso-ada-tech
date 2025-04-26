numbers.forEach((element, index, arrayComplet) => {
  console.log(element, index,  arrayComplet);
});


const numbers = [1, 2, 3, 4, 5, 6, 7];
const found = numbers.find((number) => {
  return number > 8;
});

console.log(found);



const persons = [
  {
    name: 'Pessoa1',
    age: 25,
    heigth: 1.70
  },

  {
    name: 'Pessoa2',
    age: 30,
    heigth: 1.60
  },

  {
    name: 'Pessoa3',
    age: 15,
    heigth: 1.90
  }
]

const indexFromPersonFound = persons.findIndex((persons) => {
  return persons.age === 15 && persons.heigth < 1.70;
});

console.log(indexFromPersonFound);