import { state } from "../../state";
import { handleRoute } from "../../router";
export function initPlaysPage() {
  const rootEl = document.querySelector(".root");
  rootEl.firstChild.remove()
  rootEl.innerHTML = `
  <div class="container">
      <imagen-el class="computer-choice" computer type=${
        state.getState().currentGame.computerPlay
      }></imagen-el>
      <imagen-el class="my-choice" myplay type=${
        state.getState().currentGame.myPlay
      } ></imagen-el>
  </div>
  `;

  
  const computerPlay = rootEl.querySelector(".computer-choice").getAttribute("type");

  const myPlay = rootEl.querySelector(".my-choice").getAttribute("type");

  setTimeout(() => {
    const results = state.whoWins(myPlay, computerPlay);
    if (results == 2) {
        handleRoute("/game");
    } else if (results == 1) {
        handleRoute("/loss");
    } else {
        handleRoute("/win");
    }
  }, 3000);

  return rootEl;
}