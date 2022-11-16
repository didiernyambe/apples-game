
const gamezone = document.querySelector('.game-zone');

const gettables = () => {
    while(gamezone.firstChild){
        console.log(gamezone.firstChild);
        gamezone.removeChild(gamezone.firstChild);
    } 
}

export { gettables };