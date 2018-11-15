function solve(arr) {
    let count = 0;
    let day = 0;
    let money = 0;

    let bitcoin = 11949.16;
    let gramG = 67.51;

    let firstBought = 0;

    for (let i = 0; i<arr.length; i++)
    {
        day++;
        if (day % 3 === 0) {
            money += (arr[i]*0.70)*gramG;
        }
        else {
            money += arr[i]*gramG;
        }

        while (money >= bitcoin)
        {
            money -= bitcoin;
            count++;
            if (firstBought === 0){firstBought = day;}
        }
    }

    console.log(`Bought bitcoins: ${count}`);
    if (firstBought !== 0){console.log(`Day of the first purchased bitcoin: ${firstBought}`);}
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

solve([100,200,300]);