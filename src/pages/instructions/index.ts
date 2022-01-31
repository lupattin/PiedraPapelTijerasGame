import { handleRoute } from "../../router"


export function initPageInstructions(){
    const rootEl = document.querySelector(".root")
    
    rootEl.firstChild.remove()
    rootEl.innerHTML = `
    <div class="container">
            <text-comp variant = "paragraph">Presioná jugar
            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-comp>
    
            <button-el id="button">¡Jugar!</button-el>
            
            <div class="container-images">
                <imagen-el type = "piedra"></imagen-el>
                <imagen-el type = "papel"></imagen-el>
                <imagen-el type = "tijera"></imagen-el>

            </div>
        

        </div>
    `
    const buttonEl = document.getElementById("button")
    buttonEl.addEventListener("click", ()=>{
        handleRoute("/game")
    })
}