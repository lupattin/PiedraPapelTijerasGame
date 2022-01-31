/* importo componentes  */
import { initPageWelcome } from "./pages/welcome"
import {initJugada} from "./components/jugada"
import {initButton} from "./components/button"
import {initTextcomp} from "./components/text-comp"
import {initTimerComp} from "./components/timer"
import{initScoreComp} from "./components/score-comp"

/* Importo router y state */
import { initRoute } from "./router"
import {state} from "./state"


function main(){
    /* Inicio componentes para que existan */
    initPageWelcome()
    initJugada()
    initButton()
    initTextcomp()
    initTimerComp()
    initScoreComp()
    
    /* inicio router y state para que funcione el juego */
    initRoute()
    state.init()
    
    
}



main ()