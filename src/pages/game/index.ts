import { handleRoute } from "../../router";
import { state } from "../../state"

export function initPageGame(){
    const rootEl = document.querySelector(".root")
    rootEl.firstChild.remove()
    rootEl.innerHTML = `
<div class="container">
    <timer-comp></timer-comp>
    <div class="container-images">
        <imagen-el type = "piedra" class="play"></imagen-el>
        <imagen-el type = "papel" class="play"></imagen-el>
        <imagen-el type = "tijera" class="play"></imagen-el>
    </div>
</div>
    `
    const imagenEls = rootEl.querySelectorAll(".play");
 imagenEls.forEach((ev) => {
    ev.addEventListener("click", (e) => {
      e.stopPropagation;
      const move = ev.getAttribute("type");
      if (move == "piedra") {
        state.setMove("piedra");
      } else if (move == "papel") {
        state.setMove("papel");
      } else {
        state.setMove("tijera");
      }

      handleRoute("/plays");
    });
  });

  return rootEl;
}