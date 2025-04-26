const array = ['Ermeson', 17, 1.70, true];
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

console.log(person);

console.log(person.name);
console.log(person.hobbies);
console.log(person['age']);
console.clear();

person.profession = 'Desenvolvedor';
console.log(person);
console.clear();

delete person.heigth;

console.log(person);
console.clear();
console.log(person.greenting());
console.clear();

const age = 17;
const heigth = 1.70;

const object = {
  age,
  heigth
}

console.log(object);

const { name } = person;
console.log(name);