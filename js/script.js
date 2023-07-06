const App = {
    // all of our sleected HTML elements
    $: {
        menu: document.querySelector('[data-id="menu"]'),
        menuItems: document.querySelector('[data-id="menu-items"]'),
        resetBtn: document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
        square: document.querySelectorAll('[data-id="square"]'),
    },

    state: {
        currentPlayer: 1,
    },
    
    init(){
        App.registerEventListners()
        
    },

    registerEventListners(){

        //DONE
        App.$.menu.addEventListener("click", (event) => {
        App.$.menuItems.classList.toggle("hidden");
        });

        // todo
        App.$.resetBtn.addEventListener("click", (event) => {
            console.log("reset");
        });
        
        // todo
        App.$.newRoundBtn.addEventListener("click", (event) => {
            console.log("New round");
        });

        // todo
        App.$.square.forEach((square) => {

            square.addEventListener("click", (event) => {
                console.log(`square with id ${event.target.id} was clicked`);
                console.log(`Current Player is ${App.state.currentPlayer}`);

                
                if(square.hasChildNodes()) {
                    return
                }

                const currentPlayer = App.state.currentPlayer;
                
                const icon = document.createElement("i");

                if(currentPlayer === 1){

                    icon.classList.add("fa-solid", "fa-x", "turquoise");
                }else{
                    icon.classList.add("fa-solid", "fa-o", "yellow");

                }

                App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1

                square.replaceChildren(icon);
            });
        });
    },
};
    
window.addEventListener("load", App.init);
