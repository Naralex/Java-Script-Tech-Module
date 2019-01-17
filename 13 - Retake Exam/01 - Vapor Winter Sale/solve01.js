function solve01(input) {
    let gamePrice = new Map();
    let gameDLC = new Map();

    for (let game of input[0].split(', ')) {
        if (game.includes('-')) {
            let [gameName, gameCost] = game.split('-');
            gamePrice.set(gameName, gameCost);
        }
        else {
            let [gameName, gamaeDLC] = game.split(':');

            if (gamePrice.has(gameName)) {
                gameDLC.set(gameName, gamaeDLC);
                gamePrice.set(gameName, (gamePrice.get(gameName) * 1.2) * 0.5);
            }
        }
    }
    for (let game of gamePrice) {
        if (!gameDLC.has(game[0])) {
            gamePrice.set(game[0], gamePrice.get(game[0]) * 0.8);
        }
    }
    let sortedDLC = [...gamePrice.entries()].sort((a,b)=> {return a[1] - b[1];});
    for (let game of sortedDLC){
        if (gameDLC.has(game[0])){
            console.log(`${game[0]} - ${gameDLC.get(game[0])} - ${game[1].toFixed(2)}`)
        }
    }
    let sortedWhDLC = [...gamePrice.entries()].sort((a,b)=> {return b[1] - a[1];});

    for (let game of sortedWhDLC){
        if (!gameDLC.has(game[0])){
            console.log(`${game[0]} - ${game[1].toFixed(2)}`)
        }
    }
}

solve01(['WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT']);
// solve01([ 'Center Strike-15, FortLite-25, BattleShield 5-70, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC' ]);