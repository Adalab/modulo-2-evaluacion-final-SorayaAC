'use strict';

// VARIABLES
//<-- texto q se ejecuta al cargar la página -->
//Llamada al boton
const button = document.querySelector('.js_btn');
//Llamada al boton de reset
const resetButton = document.querySelector('.js_resetbtn');
//Llamada a lo q escribe el usuario
const userInput = document.querySelector('.js_input');
//Llamada al apartado series
const series = document.querySelector('.js_series');
//Llamada al apartado favoritos
const favoritesHtml = document.querySelector('.js_favorites');
//imagen null por defecto
const imageNull = `https://via.placeholder.com/210x295/ffffff/666666/?text=TV.`;
//Array vacío para guardar los datos que me devuelve la api
let seriesData = [];
//Array vacío para guardar los datos de favoritos
let favorites = [];
//Función para no recarcar la pag al dar a intro
document.querySelector('.js_form').addEventListener('submit', (ev) => {
  ev.preventDefault();
});
