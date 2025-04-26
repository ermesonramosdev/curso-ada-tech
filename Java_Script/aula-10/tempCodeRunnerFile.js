const person = {
  name: 'Ermeson',
  age: 17,
  heigth: 1.70,
  isProgrammer: true,
  hobbies: ['Academia', 'futebol'],
  greeting: () => {
    console.log(`hello nice to meet to you`);
  }
};
const { name } = person;
console.log(name);