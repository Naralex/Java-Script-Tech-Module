function f(number) {
    for (let i = 1; i <= number; i++)
    {
        let result = [];
        for (let k = 1; k <= i; k++)
        {
            result += ' '+i;
        }
        console.log(result);
    }
}

f(3);