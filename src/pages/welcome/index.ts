import { handleRoute } from "../../router"


export function initPageWelcome(){

    const rootEl = document.querySelector(".root")
    rootEl.innerHTML = `
        <div class="container">
            <text-comp variant = "title">Piedra, Papel o Tijera.</text-comp>
    
            <button-el id="button">Empezar</button-el>
            
            <div class="container-images">
                <imagen-el type = "piedra"></imagen-el>
                <imagen-el type = "papel"></imagen-el>
                <imagen-el type = "tijera"></imagen-el>

            </div>
        

        </div>

    `
    const buttonEl = document.getElementById("button")
    buttonEl.addEventListener("click", ()=>{
        handleRoute("/instructions")
    })
}