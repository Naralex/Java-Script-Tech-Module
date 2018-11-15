function solvef(percent) {
    let arr = [];
    for (let i = 1; i <= 10; i++)
    {
        if (i <= percent/10)
        {
            arr += '%';
        }
        else {
            arr += '.';
        }
    }

    if (percent === 100)
    {
        console.log('100% Complete!');
        console.log(`[${arr.join('')}]`);
    }
    else
    {
        console.log(`${percent}% [${arr}]`);
        console.log('Still loading...')
    }
}
solvef(30);