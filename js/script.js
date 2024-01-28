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
        moves: [],
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
                //check if there is already a play, if so, return early
                
                if(square.hasChildNodes()) {
                    return
                }
                
                //check which player to play
                const lastmove = App.state.moves.at(-1);
                const getOppositePlayer = (playerId) => (playerId === 1 ? 2 : 1);
                const currentPlayer = 
                App.state.moves.length === 0
                ? 1
                : getOppositePlayer(lastmove.playerId);
                
                const icon = document.createElement("i");
                
                if(currentPlayer === 1){

                    icon.classList.add("fa-solid", "fa-x", "turquoise");
                }else{
                    icon.classList.add("fa-solid", "fa-o", "yellow");

                }

                App.state.moves.push({
                    spuareId: +square.id,
                    playerId: currentPlayer,
                });
              
                App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1

                console.log(App.state);

                square.replaceChildren(icon);

                //check if the game ends
                const winningPatterns = [
                    [1, 2, 3],
                    [1, 5, 9],
                    [1, 4, 7],
                    [2, 5, 8],
                    [3, 5, 7],
                    [3, 6, 9],
                    [4, 5, 6],
                    [7, 8, 9],
                ];

            });
        });
    },
};
    
window.addEventListener("load", App.init);
