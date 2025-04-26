function readFilePromises() {
  return new Promise((resolve, reject) => {
    const fs = require("fs");
    fs.readFile("Java_Script/aula-13/arquivo.json", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo: ", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}


// * 3. async/await

async function dataReading() {
  console.log('Isso é executado ANTES da promise ser resolvida!');
  try {
    const returnFromPromise =  await readFilePromises();
    console.log(returnFromPromise);
    console.log('Isso é executado DEPOIS da promise ser resolvida!');
  } catch(err) {
    console.log(err);
    console.log('Isso aqui é executado depois da promise (com erro)');
  } finally {
    console.log('Isso aqui é executado mesmo se der certo ou errado a promise');
  }
}

dataReading();