const person = {
  name: "Ermeson",
  age: 17,
  heigth: 1.70
}

const personWithWeigth = [{
  ...person,
  weigth: 80
}]

const personIMC = personWithWeigth.map((element) => {
  console.log(element);
  return {
    imc: element.weigth / (element.heigth ** 2)
  };

});


console.log(personIMC);