function solve03(input) {
    let energy = 100;
    let coins = 100;
    let eventLog = input[0].split('|');

    for (event of eventLog){
        let [type, value] = event.split('-');
        value = Number(value);
        switch (type) {
            case 'rest':
                let restAmount = energy;
                if (energy < 100){
                    energy += value;
                    if (energy > 100) {
                        energy = 100;
                        restAmount = energy - restAmount;
                        console.log(`You gained ${restAmount} energy.`);
                        console.log(`Current energy: ${energy}.`);
                    }
                    console.log(`You gained ${energy - restAmount} energy.`);
                    console.log(`Current energy: ${energy}.`);
                }else {
                    restAmount = energy - restAmount;
                    console.log(`You gained ${restAmount} energy.`);
                    console.log(`Current energy: ${energy}.`);
                }
                break;
            case 'order':
                if (energy - 30 >= 0){
                    coins += value;
                    energy -= 30;
                    console.log(`You earned ${value} coins.`);
                }
                else {
                    energy += 50;
                    if (energy > 100){energy = 100}
                    console.log(`You had to rest!`)
                }
                break;
            default:
                coins -= value;
                if (coins > 0){
                    console.log(`You bought ${type}.`)
                } else { return console.log(`Closed! Cannot afford ${type}.`)}
        }
    }
    console.log(`Day completed!`);
    console.log(`Coins: ${coins}`);
    console.log(`Energy: ${energy}`);
}
solve03([ 'rest-2|order-10|eggs-100|rest-10' ]);
// solve03([ 'order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000' ]);