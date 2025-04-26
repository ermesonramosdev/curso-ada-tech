/*
  ! Fetch API
  fetch('URL', 'heards body method' ) 
    * Para quê serve a FetchAPI
        Fetch API é uma API do Browser (Ela basicamente serve para pegar dados da API).
    * Exemplo
        async function createUser() {
          const userData = {
            'firstName': 'Ermeson',
            'lastName': 'Ramos',
            'email': 'ermeson@test.com'
          }
            
          await fetch('https://viacep.com.br/ws/01001000/json/', {
          method: 'POST',
          headers: {
            'app-id': '63f77cc1b7f489f0b351b30f', -> Chave da minha API
            'Content-Type': 'application/json', 
          },
          body: JSON.strify(userData), -> O body não aceita objeto é necessario utilizar o JSON.strinfy(variavel)
        })
        }
        
       
  
*/

// then / catch
fetch("https://viacep.com.br/ws/01001000/json/")
  .then((response) => {
    response.json().then((datas) => console.log(datas));    
  })
  .catch((erro) => {
    console.log(erro);
  });

// async / await
async function getDatasFromCep() {
  try {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    const datas = await response.json();
    console.log(datas);
  } catch (erro) {
    console.log('Deu errado: ', erro);
  } finally {
    console.log('Terminou a requisição');
  }
}

getDatasFromCep();