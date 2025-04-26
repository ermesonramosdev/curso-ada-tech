const deacreaseButton = document.querySelector('#deacrease-button');
const increaseButton = document.querySelector('#increase-button');
const counter = document.querySelector('#counter');
const input = document.querySelector('#input');


deacreaseButton.addEventListener('click', () => {
  const valueCurrent = Number(counter.textContent) - 1;
  counter.textContent = valueCurrent;
  deacreaseButton.style.backgroundColor = 'red';
  deacreaseButton.classList.add('btn');
  increaseButton.classList.remove('btn')
  if(valueCurrent < 0) {
    counter.style.color = 'red';
  }
});

increaseButton.addEventListener('click', () => {
  const valueCurrent = Number(counter.textContent) + 1;
  counter.textContent = valueCurrent;
  deacreaseButton.style.backgroundColor = 'white';
  increaseButton.classList.add('btn');
  deacreaseButton.classList.remove('btn')
  if(valueCurrent > 0) {
    counter.style.color = 'blue';
  }
});


//Serve para pegar cada digitação que está sendo passada pelo input.
input.addEventListener('input', () => {
  console.log(input.value);
});

//Adicionando estilos inline no elemento contador

counter.style.textAlign = 'center';
counter.style.padding = '0 2rem';
counter.style.border = '1px solid #aaa';
counter.style.width = '150px';

// Manipular classes
console.log(increaseButton.classList);

const themeButton = document.querySelector('#theme');
let darkTheme;
//Definindo uma função que será executada ao carregar o conteúdo da janela.
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem('isDarkTheme');
  darkTheme = isDarkThemeStorage === 'true' ? true : false;
  replacementOfThemes()
};
themeButton.addEventListener('click', () => {
  darkTheme = !darkTheme;
  localStorage.setItem('isDarkTheme', darkTheme);
  replacementOfThemes()
});

function replacementOfThemes() {
  const body = document.querySelector('body');
  if(darkTheme) {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';    
  } ; 
};