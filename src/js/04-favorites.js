'use strict';
// función para escuchar el click

function listenshows() {
  const listshows = document.querySelectorAll('.js_serie');
  for (const serieElement of listshows) {
    serieElement.addEventListener('click', handleListSeries);
  }
}
function handleListSeries(ev) {
  const selectedSerie = parseInt(ev.currentTarget.id);
  const selectedSerieId = seriesData.find((serie) => {
    return serie.show.id === selectedSerie;
  });
  console.log(selectedSerie);
  console.log(selectedSerieId);
  console.log(favorites);
  const favoritesFound = favorites.findIndex((fav) => {
    return fav.show.id === selectedSerie;
  });

  if (favoritesFound === -1) {
    favorites.push(selectedSerieId);
  } else {
    favorites.splice(favoritesFound, 1);
  }
  paintSeries();
  paintFavorites();
  setInLocalStorage();
}
//función para pintar favoritos
function paintFavorites() {
  favoritesHtml.innerHTML = '';
  let htmlFav = '';
  console.log(favorites);
  for (const favorite of favorites) {
    htmlFav += `<li class="js_favorite favorites__item" id="${favorite.show.id}">`;
    if (favorite.show.image === null) {
      htmlFav += `<img class="favorites__item--img" src="${imageNull}" alt="" />`;
    } else {
      htmlFav += `<img class="favorites__item--img" src="${favorite.show.image.medium}" alt="" >`;
    }
    htmlFav += `<h3 class="favorites__item--title">${favorite.show.name}</h3>`;
    htmlFav += `</li>`;
    favoritesHtml.innerHTML = htmlFav;
  }
  listenshows();
}
