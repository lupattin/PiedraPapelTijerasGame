import { initPageWelcome } from "./pages/welcome"
import { initPageInstructions } from "./pages/instructions"
import { initPageGame } from "./pages/game"
import { initPlaysPage } from "./pages/plays"
import { initGanastePage } from "./pages/ganaste"
import { initPerdistePage } from "./pages/perdiste"
const routes = [

    {
        path: "/desafio-m5/",
        component: initPageWelcome,
        
    },
    {
        path: "/welcome",
        component: initPageWelcome,
        
    },
    {
        path: "/instructions",
        component: initPageInstructions,
    },
    {
        path: "/game",
        component: initPageGame,
    },
    {
        path: "/plays",
        component: initPlaysPage,
    },
    {
        path: "/win",
        component: initGanastePage,
    },
    {
        path: "/loss",
        component: initPerdistePage,
    }
    
]

function initRoute(){
    
    window.addEventListener("load", ()=>{
        handleRoute(location.pathname)
    })

}

function handleRoute(path){

    
    if(path == "/desafio-m5/"){
        history.pushState ( {}, "", "/welcome" )
    } else {
        history.pushState ( {}, "", path )
    }
    
    for (const r of routes) {
        if (path == r.path){
            r.component()
        }
    }
    window.onpopstate = function () {
        handleRoute(location.pathname);
    }
    
}



export { initRoute }
export {handleRoute}