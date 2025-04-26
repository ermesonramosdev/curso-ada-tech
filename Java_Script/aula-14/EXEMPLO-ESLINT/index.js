// 1. Lendo um arquivo JSON
const fs = require("fs");
fs.readFile("./Java_Script/aula-13/arquivo.json", (error, dados) => {
  if(error) {
    console.log("Erro: ",error);
  } else {
    // dados: Buffer com os dados do arquivo json
    const dataObject = ("Dados: ", JSON.parse(dados)); // convertendo o Buffer em um objeto do JavaScript
    console.log(dataObject);
    console.log(typeof dados);
  }
});


const jsonString = '{"nome": "Ermeson"}';
console.log(JSON.parse(jsonString));

const person = {
  name: "Ermeson",
  work: "Desenvolvedor"
};

console.log(JSON.stringify(person));
