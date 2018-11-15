function DarkestDungeonKnockOff(dungeonRooms) {
    let health = 100;
    let coins = 0;
    let bestRoomCount = 1;
    dungeonRooms = dungeonRooms[0].split('|');

    for (let i = 0; i < dungeonRooms.length; i++) {
        let currentRoom = dungeonRooms[i].split(' ');
        if (currentRoom[0] === 'potion') {
            let healAmmount = health;
            health += Number(currentRoom[1]);
            if (health > 100) {
                health = 100;
                healAmmount = health - healAmmount;
                console.log(`You healed for ${healAmmount} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            else {
                healAmmount = health - healAmmount;
                console.log(`You healed for ${healAmmount} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }
        else if (currentRoom[0] === 'chest') {
            coins += Number(currentRoom[1]);
            console.log(`You found ${Number(currentRoom[1])} coins.`)
        }
        else {
            health -= Number(currentRoom[1]);
            if (health <= 0) {
                console.log(`You died! Killed by ${currentRoom[0]}.`);
                break;
            }
            else {
                console.log(`You slayed ${currentRoom[0]}.`)
            }
        }
        bestRoomCount++;
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
    else {
        console.log(`Best room: ${bestRoomCount}`)
    }
}

// DarkestDungeonKnockOff('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
DarkestDungeonKnockOff('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');