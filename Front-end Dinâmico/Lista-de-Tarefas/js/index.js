/*
  1. Primeiro lidar com os elementos.

  2. Segundo lidar com os eventos.

  3. Aplicar a logíca para código.
*/


const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const todoListUl = document.querySelector('#todo-list');
let taks = [];

function renderTaskOnHTML(taskTitle, done = false) {
  const li = document.createElement('li');

  const input = document.createElement('input');
  // Ele vai setar o type do input.
  input.setAttribute('type', 'checkbox');
  input.addEventListener('change', (event) => {

    const lliToTogge = event.target.parentElement;
    const spanToToggle = liToToggle.querySelector('span');
    const done = event.target.checked;

    if (done) {
      spanToToggle.style.textDecoration = 'line-through';
    } else {
      spanToToggle.style.textDecoration = 'none';
    }

    taks = taks.map(t => {
      if (t.title === spanToToggle.textContent) {
        return {
          title: t.title,
          done: !t.done,
        }
      }
      return t;
    });
    localStorage.setItem('tasks', JSON.stringify(taks));
  });

  input.checked = done;

  const span = document.createElement('span');
  span.textContent = taskTitle;

  if (done) {
    span.style.textDecoration = 'line-through';
  }

  const button = document.createElement('button');
  button.textContent = 'Remover';
  button.addEventListener('click', (event) => {

    const liToRemove = event.target.parentElement;
    const titleToRemove = liToRemove.querySelector('span').textContent;
    
    taks = taks.filter((t) => t.title !== titleToRemove);
    
    // target -> E basicamente se refere ao elemento que disparou o evento.

    // parentElement -> Em JavaScript, a propriedade .parentElement é usada para acessar o elemento pai de um determinado elemento no DOM (Document Object Model). Ela retorna o elemento pai mais próximo do elemento atual na hierarquia do DOM. Se o elemento não tiver um elemento pai (por exemplo, se for o nó raiz do documento), a propriedade retornará null.
    todoListUl.removeChild(liToRemove);
    localStorage.setItem('tasks', JSON.stringify(taks));
    
  });
  
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUl.appendChild(li);
}

window.onload = () => {
  const taskOnLocalStorage = localStorage.getItem('tasks');

  if (!taskOnLocalStorage) return;

  taks = JSON.parse(taskOnLocalStorage);

  taks.forEach(t => {
    renderTaskOnHTML(t.title, t.done);
  });

  console.log(taks);
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao submeter o formulário.
  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert('Sua tarefa precisa de pelo menos três caracteres');
    // O return serve para sair da função ou seja ele não vai rodar o resto do código embaixo.
    return;
  };

  taks.push({
    title: taskTitle,
    done: false,
  });

  localStorage.setItem('tasks', JSON.stringify(taks));
   
  renderTaskOnHTML(taskTitle);
  
  taskTitleInput.value = '';
});




