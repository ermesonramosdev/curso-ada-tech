const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null  = document.querySelector('#input-location');
const sectionTimeInfor = document.querySelector('#time-info');

form?.addEventListener('submit', async(event) => {
  event.preventDefault();
  
  if (!input || !sectionTimeInfor) return;

  const location = input.value;

  if (location.length < 3) return alert('O local precisa de pelo menos três letras');

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5bc9b00e56a2d38d31235f6afef1262e&lang=pt_br&units=metric`);

    const data = await response.json();

    console.log(data);

    const infos = {
      temperature: Math.round(data.main.temp),
      location: data.name,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };

    sectionTimeInfor.innerHTML = `
      <div class="time-data">
        <h2>${infos.location}</h2>
        <span>${infos.temperature}°</span>
      </div>
      <img src="${infos.icon}" />

    `;

    input.value = '';
  } catch (err) {
    console.log('Deu um erro na obtenção dos dados da API', err);
  };

});