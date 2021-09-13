'use strict';

function eraseAllFavorites (){
    favorites = [];
    localStorage.removeItem('favorites');
    paintFavorites();
}

resetButton.addEventListener('click', eraseAllFavorites);

