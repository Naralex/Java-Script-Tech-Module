function solve(arg1) {
    let numberToString = arg1.toString();
    let oddNumber = 0;
    let evenNumber = 0;
    for (let i = 0; i < numberToString.length; i++)
    {
        if (numberToString[i] % 2 === 0)
        {
            evenNumber+= Number(numberToString[i]);
        }
        else {
            oddNumber += Number(numberToString[i]);
        }
    }
    console.log(`Odd sum = ${oddNumber}, Even sum = ${evenNumber}`)
}
solve(123456);