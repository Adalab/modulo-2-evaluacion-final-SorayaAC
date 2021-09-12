'use strict';




function handleseries(ev){
  console.log(ev.currentTarget.id);
  const selectedSerie = parseInt(ev.currentTarget.id);
  const clickedSerie = seriesData.find((serie) => {

  return serie.show.id === selectedSerie ;
  });
  console.log(selectedSerie);
  console.log(clickedSerie);
  console.log(favorites);
  const favoritesFound = favorites.findIndex((fav) => {
    return fav.show.id === selectedSerie;
  });
  if (favoritesFound === -1) {
    favorites.push(clickedSerie);
  } else {
    favorites.splice(favoritesFound, 1);
  }
  paintFavorites();
}




function listenshows(){
  const listshows = document.querySelectorAll('.js_serie');
  for (const serieElement of listshows) {
    serieElement.addEventListener('click', handleseries);
    
  }
}



series.addEventListener('click',listenshows);

function paintFavorites() {
  let html = '';
  for (const favorite of favorites) {
    html += `<li class="js_favorite main__shows--favorites__li" id="${favorite.show.id}">`;
    if (favorite.show.image === null) {
      html += `<img src="${imageNull}" alt="" />`;
    } else {
      html += `<img src="${favorite.show.image.medium}" alt="" >`;
    }
    html += `<h3>${favorite.show.name}</h3>`;
    html += `</li>`;
    favoriteshtml.innerHTML = html;
  }
}