'use strict';

// VARIABLES
//Llamada al boton
const button = document.querySelector('.js_btn');
//Llamada a lo q escribe el usuario
const userInput = document.querySelector('.js_input');
//Guardar lo q escribe el usuario
const userOption = userInput.value;
//Array para guardar los datos que me devuelve la api
let showData = [];

// llamada a la api
function apiInfo(){
fetch(`//api.tvmaze.com/search/shows?q=${userOption}`)
    .then(response => response.json())
    .then((data) => { showData = data; });
    showPrint(showData);
}
console.log(showData);


// function showPrint(){
//     for (const showlist of showData) {
        
// }


button.addEventListener('click', apiInfo );