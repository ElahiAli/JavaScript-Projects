var count = 0;

function cardGame(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    var holdbet = 'Hold';
    if (count > 0){
        holdbet = 'Bet';
    }

    return count + " " + holdbet;
}

//1 + none - 1  = 0
cardGame(2); cardGame(7); cardGame('K'); 
// count = 0 + 1 = 1  
console.log(cardGame(2)) 