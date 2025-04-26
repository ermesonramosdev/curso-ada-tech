"use strict";
let numbers = 20;
const pi = 3.1415;
let nome = 'Ermeson';
let isTrue = true;
let result = numbers * pi;
console.log(result);
//const nameFromUser = prompt('Qual é o seu nome?');
//console.log(nameFromUser?.toLocaleUpperCase());
const myArray = [1, 2, 4, 5];
const myArrayRandom = ['Ermeson', 17, 1.70];
const myOtherArray = [1, 2, 3, 4,];
const ages = [];
ages.push(17);
ages.push(18);
ages.push(20);
ages.push(25);
console.log(ages);
const minorsFromAge = ages.filter((age) => age < 18);
console.log(minorsFromAge);
for (const age of ages) {
    console.log(age);
}
;
const personTupla = ['Ermeson', 17];
const person = {
    name: 'Ermeson',
    age: 17,
    work: 'Develop',
    heigth: 1.70
};
console.log(person);
function chooseNumber(number1, number2, criterio) {
    switch (criterio) {
        case 'greater':
            return number1 > number2 ? number1 : number2;
        case 'lower':
            return number1 < number2 ? number1 : number2;
        default:
            const numberRandom = Math.random();
            if (numberRandom >= 0.75)
                return number1;
            return number2;
    }
    ;
}
const numberChosen = chooseNumber(10, 20, 'lower');
console.log('Numero escolhido: ', numberChosen);
const persons = {
    '108.010.353-84': {
        name: 'Ermeson',
        age: 17,
        work: 'Develop',
        heigth: 1.70
    }
};
