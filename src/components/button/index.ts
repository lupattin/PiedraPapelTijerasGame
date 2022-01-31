export function initButton() {
  
  class Button extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render(){
        const shadow = this.attachShadow({ mode: "open"});
        const button = document.createElement("button")
        const style = document.createElement("style")
        button.classList.add("button")
        button.innerHTML = this.textContent
        
        
        style.textContent = `
          .button{
            font-family: 'Odibee Sans', cursive;
            font-size: 20px;
            height: 70px;
            width: 200px;
            border: 10px solid #001997;
            background-color: #006CFC;
            color: white;
          }
        `
        shadow.appendChild(button)
        shadow.appendChild(style)
          
      }
    }
  customElements.define("button-el", Button);  
}


