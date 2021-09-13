'use strict';

function eraseAllFavorites (){
    favorites = [];
    localStorage.removeItem('favorites');
    paintFavorites();
}

// function eraseOneFavorite(){
// find
// eliminar de mi lista fav
// actualizar el ls favs
// volver a pintar
// }
resetButton.addEventListener('click', eraseAllFavorites);
// eraseButton.addEventListener('click', eraseOneFavorite);
