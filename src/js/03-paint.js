'use strict';
//-------------------------------------falta guardar en variables, código más limpio
function paintSeries() {
    let html = '';
  
    for (const serie of seriesData) {
      html += `<li class="js_serie main__shows--series__li" id="${serie.show.id}">`;
      if (serie.show.image === null) {
        html += `<img src="${imageNull}" alt="" />`;
      } else {
        html += `<img src="${serie.show.image.medium}" alt="" >`;
      }
      html += `<h3>${serie.show.name}</h3>`;
      html += `</li>`;
    }
    series.innerHTML = html;
    listenshows();
  }