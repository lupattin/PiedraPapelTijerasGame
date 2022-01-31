import { handleRoute } from "../../router";
const perdisteResultURL = require("url:../../images/Star2.png");

export function initPerdistePage() {
  const rootEl = document.querySelector(".root");
  

  rootEl.innerHTML = `
  <div class="container">
      
      <img width="255px" src="${perdisteResultURL}">
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