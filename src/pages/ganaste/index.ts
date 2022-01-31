import { handleRoute } from "../../router";
const ganasteResultURL = require("url:../../images/Star1.png");

export function initGanastePage() {
  const rootEl = document.querySelector(".root");
  

  rootEl.innerHTML = `
  <div class="container">
      
      <img width="255px" src="${ganasteResultURL}">
      <div class="match-results__image-text"></div>
      
      <score-comp></score-comp>
      <button-el class="button">replay</button-el>
  </div>
  `;

  const buttonEl = rootEl.querySelector(".button");
  buttonEl.addEventListener("click", (e) => {
    e.preventDefault;
     handleRoute("/instructions");
  });

  return rootEl;
}