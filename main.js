alert(' ---- HERE STARTS THE GAME;\n ---- TRY TO FIND ONLY RED APPLES')


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

// event listener on the tables cells
const tds = document.getElementsByTagName('td');
for (const td of tds) {
    td.addEventListener('click', () => {
        console.log(td.innerHTML);
        if (td.innerHTML === "🍏") {
            alert("A green apple, YOU LOSE");
        }
    })
}


// fonction pour l'attribution de la pomme verte
function greenApple(tableIndex, appleTable) {
    for (let times = 0; times < tableIndex; times++) {
        console.log(times);
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