"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('#search-form > form');
const input = document.querySelector('#input-location');
const sectionTimeInfor = document.querySelector('#time-info');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !sectionTimeInfor)
        return;
    const location = input.value;
    if (location.length < 3)
        return alert('O local precisa de pelo menos três letras');
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5bc9b00e56a2d38d31235f6afef1262e&lang=pt_br&units=metric`);
        const data = yield response.json();
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
    }
    catch (err) {
        console.log('Deu um erro na obtenção dos dados da API', err);
    }
    ;
}));
