'use strict';
//-------------------------------------falta guardar en variables, código más limpio
function paintSeries() {
    let html = '';
  
    for (const serie of seriesData) {
      html += `<li class="js_serie" id="${serie.show.id}">`;
      if (serie.show.image === null) {
        html += `<img src="${imageNull}" alt="" />`;
      } else {
        html += `<img src="${serie.show.image.medium}" alt="" >`;
      }
      html += `<h2>${serie.show.name}</h2>`;
      html += `</li>`;
    }
    series.innerHTML = html;
    listenshows();
  }