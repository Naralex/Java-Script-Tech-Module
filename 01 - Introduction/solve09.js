function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let step = 0;

    while (base > 2)
    {
        step++;
        let stonebase = base - 2;
        stone += stonebase ** 2 * increment;
        if (step % 5 === 0) {
            lapis += (stonebase * 4 + 4) *increment;
        } else {
            marble += (stonebase * 4 + 4) *increment;
        }

        base -= 2;
    }

    step++;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(base * base * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(step*increment)}`);
}
solve(11,0.75);