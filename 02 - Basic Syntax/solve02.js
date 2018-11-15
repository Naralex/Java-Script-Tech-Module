function solve(startingYeild) {
    let daysmined = 0;
    let spice = 0;

    while (startingYeild >= 100)
    {
        spice += startingYeild;
        spice -= 26;

        daysmined ++;
        startingYeild -= 10;

    }
    if (spice > 26)
    {
        spice -= 26;
    }

    console.log(daysmined);
    console.log(spice);
}
solve(450);