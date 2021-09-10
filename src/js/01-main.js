'use strict';

// VARIABLES
//<-- texto q se ejecuta al cargar la página -->
//Llamada al boton
const button = document.querySelector('.js_btn');
//Llamada a lo q escribe el usuario
const userInput = document.querySelector('.js_input');
//Array para guardar los datos que me devuelve la api

const series = document.querySelector('.js_series');

let seriesData = [];

function paintSeries() {
let html = '';

for (const serie of seriesData) {
    html += `<li>`;
    html +=`<img src="${serie.show.image.medium}" alt="" />`  ;
    html+=`<h2>${serie.show.name}</h2>` ;
    html+= `</li>`;
    series.innerHTML= html;
}
}

// función para tarer datos
function apiInfo() {

//Guardar lo q escribe el usuario
const userOption = userInput.value;
fetch(`//api.tvmaze.com/search/shows?q=${userOption}`)
    //llamar al servidor
    .then(response => response.json())
    //data es lo q devuelve json
    .then((data) => {
    seriesData = data;
    console.log(seriesData);
    paintSeries();
    });
}

button.addEventListener('click', apiInfo);


document.querySelector('.js_form').addEventListener('submit', (ev) => {ev.preventDefault();});