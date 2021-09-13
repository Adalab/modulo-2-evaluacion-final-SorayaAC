'use strict';
//función para añadir información al LocalStorage
function setInLocalStorage() {
  const stringFavorites = JSON.stringify(favorites);
  localStorage.setItem('favorites', stringFavorites);
}
//función para traer datos del LocalStorage
function getLocalStorage() {
  const localStorageFavorites = localStorage.getItem('favorites');
  if (localStorageFavorites === null) {
    apiInfo();
  } else {
    const arrayFav = JSON.parse(localStorageFavorites);
    favorites = arrayFav;
    paintFavorites();
  }
}

getLocalStorage();