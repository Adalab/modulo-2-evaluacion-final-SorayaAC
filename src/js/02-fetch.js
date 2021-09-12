'use strict';
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
