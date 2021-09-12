'use strict';




function handleseries(ev){
  console.log(ev.currentTarget.id);
  const selectedSerie = ev.currentTarget;
  const selserieid = parseInt(selectedSerie.id);
  const clickedSerie = seriesData.find((serie) => {

  return serie.show.id === selserieid ;
  });
  console.log(selectedSerie);
  console.log(clickedSerie);
  console.log(favorites);
  const favoritesFound = favorites.findIndex((fav) => {
    return fav.show.id === selserieid;
  });
  if (favoritesFound === -1) {
    favorites.push(clickedSerie); console.log(favorites);
  } else {
    favorites.splice(favoritesFound, 1); console.log(favorites);
  }

}




function listenshows(){
  const listshows = document.querySelectorAll('.js_serie');
  for (const serieElement of listshows) {
    serieElement.addEventListener('click', handleseries);
    paintFavorites();
  }
}



series.addEventListener('click',listenshows);

function paintFavorites() {
  let html = '';
  for (const favorite of favorites) {
    html += `<li class="js_favorite" id="${favorite.show.id}">`;
    if (favorite.show.image === null) {
      html += `<img src="${imageNull}" alt="" />`;
    } else {
      html += `<img src="${favorite.show.image.medium}" alt="" >`;
    }
    html += `<h2>${favorite.show.name}</h2>`;
    html += `</li>`;
    favoriteshtml.innerHTML = html;
  }
}