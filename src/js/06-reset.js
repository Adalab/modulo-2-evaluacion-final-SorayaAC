'use strict';

function eraseAllFavorites (){
    favorites = [];
    // localStorage.clear();
}

// function eraseOneFavorite(){

// }
resetButton.addEventListener('click', eraseAllFavorites);
// eraseButton.addEventListener('click', eraseOneFavorite);
