// Selecionar elemetos HTML da nossa página utilizando o document.

// 1. Pelo nome da Tag
const allP = document.getElementsByTagName('p');
console.log(allP);

// 2. Pelo nome da Classe
const allClasseParagraph = document.getElementsByClassName('paragraph');
console.log(allClasseParagraph);

// 3. Pelo name da Tag
const emailInput = document.getElementsByName('email');
console.log(emailInput);

// 4. Pelo id
const jsLogoImg = document.getElementById('js-logo');
console.log(jsLogoImg);

// 5. query Select
const imagem = document.querySelector('body > img#js-logo');
console.log(imagem);

// 6. query SelectorAll
const paragraph = document.querySelectorAll('p');
console.log(paragraph);


// Alterar o texto dos elementos HTML
console.clear();
const primaryParagraph = document.querySelector('p.paragraph');
console.log("textContent:",primaryParagraph.textContent);
primaryParagraph.textContent = 'Alterado pelo JavaScript!';

console.log("innerHTML: ",primaryParagraph.innerHTML);
primaryParagraph.innerHTML = '<strong> Negrito </strong>';


console.clear();
emailInput[0].value = 'foco naquilo que você pode controlar';

// Criando elemetos na página HTML
const listUl = document.querySelector('#lista');
const listLis = document.querySelectorAll('ul > li');
const newTagLi = document.createElement('li');
newTagLi.textContent = 'Segundo Item';
// listUl.appendChild(newTagLi);
listUl.insertBefore(newTagLi, listLis[1]);


// Removendo elementos
listUl.removeChild(newTagLi);



