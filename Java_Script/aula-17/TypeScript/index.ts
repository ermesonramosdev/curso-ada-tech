let numbers = 20;

const pi = 3.1415;

let nome: string = 'Ermeson';

let isTrue: boolean = true;

let result = numbers * pi;
console.log(result);

//const nameFromUser = prompt('Qual é o seu nome?');
//console.log(nameFromUser?.toLocaleUpperCase());

const myArray: number[] = [1, 2, 4, 5];

const myArrayRandom: (number | string)[] = ['Ermeson', 17, 1.70];

const myOtherArray: Array<number>  = [1, 2, 3, 4,];

const ages: number[] = [];
ages.push(17);
ages.push(18);
ages.push(20);
ages.push(25);
console.log(ages);

const minorsFromAge =  ages.filter((age) => age < 18);
console.log(minorsFromAge);

for(const age of ages) {
  console.log(age);
};

const personTupla: [string, number] = ['Ermeson', 17];



// Object Types 
//Interface
//Type

//Interface
interface Person {
  name: string;
  age: number;
  work?: string;
  heigth: number;
}

const person: PersonType = {
  name: 'Ermeson',
  age: 17,
  work: 'Develop',
  heigth: 1.70
}

console.log(person);

//Type
type PersonType = {
  name: string;
  age: number;
  work?: string;
  heigth: number;
}

type Criterio = 'greater' | 'lower';

function chooseNumber(
  number1: number, 
  number2: number, 
  criterio?: Criterio 
): number {
  switch(criterio) {
    case 'greater':
      return number1 > number2 ? number1 : number2
    case 'lower':
      return number1 < number2 ? number1 : number2
    default: 
      const numberRandom = Math.random();
      if(numberRandom >= 0.75) return number1;
      return number2;
  }; 
}
const numberChosen = chooseNumber(10, 20, 'lower');
console.log('Numero escolhido: ', numberChosen);


// * Utility Types
// 1. Partial
  
type PersonPartial = Partial<Person>;

// 2. Required

type PersonRequired = Required<Person>;

// 3. Pick

type PersonPicked = Pick<Person, 'name' | 'age'>

// 4. Omit

type PersonOmit = Omit<Person, 'work' >

// 5. Exclude

type CriterioExclude = Exclude<Criterio, 'greater'>;

// 6. Record

type Persons = Record<string, Person>

const persons: Persons = {
  '108.010.353-84': {
    name: 'Ermeson',
    age: 17,
    work: 'Develop',
    heigth: 1.70
  }
}


