'use strict';

// VARIABLES
//<-- texto q se ejecuta al cargar la página -->
//Llamada al boton
const button = document.querySelector('.js_btn');
//Llamada a lo q escribe el usuario
const userInput = document.querySelector('.js_input');

const series = document.querySelector('.js_series');

const favoriteshtml = document.querySelector('.js_favorites');

const imageNull= `https://via.placeholder.com/210x295/ffffff/666666/?text=TV.`;
//Array vacío para guardar los datos que me devuelve la api
let seriesData = [];
let favorites = [];

document.querySelector('.js_form').addEventListener('submit', (ev) => {ev.preventDefault();});