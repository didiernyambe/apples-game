//alert(' ---- HERE STARTS THE GAME;\n ---- TRY TO FIND ONLY RED APPLES')


const attribApples = () => {
    for (let index = 1; index <= 10; index++) {
        const element = document.getElementById(`${index}`);
        // reach the td which are children of tr, then of tbody; reason of the (chilnodes[0]) twice
        const appleTable = element.childNodes[0].childNodes[0].childNodes;
        if(index < 5){
            greenApple(1, appleTable);
        } else if (index >= 5 && index < 8){
            greenApple(2, appleTable);
        } else if(index >= 8 && index < 10){
            greenApple(3, appleTable);
        } else {
            greenApple(4, appleTable);
        }
    }
}

// hiding all the tables with the id greater than 1 to start the game
const tables = document.querySelectorAll('table');
for (const table of tables) {
    if (parseInt(table.id) > 1){
        table.setAttribute('hidden', 'hidden');
    }
}

// event listener on the tables cells
const tds = document.getElementsByTagName('td');
for (const td of tds) {
    td.addEventListener('click', () => {
        
        if (td.innerHTML === "🍏") {
            alert("A green apple, YOU LOSE");
        } else {
            // Getting the id of the table which contains the cell we click one
            // td>tr>tbody>table.id
            const nextTableId = parseInt(td.parentElement.parentElement.parentElement.id) + 1;
            if(nextTableId <= 10){
                // atteindre le prochain tableau
                let nextTable = document.getElementById(`${nextTableId}`);
                console.log(parseInt(td.parentElement.parentElement.parentElement.id) + 1);
                console.log(nextTable);
                nextTable.removeAttribute('hidden');
            }
            
        }
        // retablir la couleur sur le tableau qu'on vient de cliquer
        td.parentElement.parentElement.parentElement.style.filter = "contrast(100%)";
    })
}


// fonction pour l'attribution de la pomme verte
function greenApple(nbApples, appleTable) {
    for (let times = 1; times <= nbApples; times++) {
        // console.log(times);
        let caseAleatoire = Math.floor((Math.random() * 5));
        if (appleTable[caseAleatoire].innerHTML === "🍏") {
            times = times--;
            continue;
        } else {
            appleTable[caseAleatoire].innerHTML = "🍏";
        }
    }
}

attribApples()
// gettables();