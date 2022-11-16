
const gamezone = document.querySelector('.game-zone');
const gettables = () => {
    let numTables = 0;
    while(gamezone.firstChild){
        numTables++;
        gamezone.firstChild.setAttribute('id', numTables);
        console.log(gamezone.firstChild);
        // console.log(`Type : ${gamezone.nodeType, numTables}`);
        // gamezone.removeChild(gamezone.firstChild);
    } 
    console.log(`${nbreTables} tableaux`);
}

const attribApples = () => {

}

gettables();