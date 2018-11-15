function coinsDaGoEba(arr) {
    let partySize = arr[0];
    let days = arr[1];
    let coins = 0;

    for (let i = 1; i <= days; i++)
    {
        //People calculations
        if (i % 10 === 0)
        {
            partySize -= 2;
        }
        if (i % 15 === 0)
        {
            partySize += 5;
        }

        //Coin calculations
        coins+=50;
        coins = coins - (partySize*2);
        if (i % 3 === 0)
        {
            coins = coins - (partySize*3);
        }
        if (i % 5 === 0)
        {
            coins+=(partySize*20);
            if (i % 3 === 0)
            {
                coins = coins - (partySize*2);
            }
        }
    }
    console.log(`${partySize} companions received ${Math.floor(coins/partySize)} coins each.`)
    // console.log(coins, partySize);
}
coinsDaGoEba([15,30]);
