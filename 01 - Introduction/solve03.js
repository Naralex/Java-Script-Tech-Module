function solve(arg1) {

    if (arg1 % 10 ===0)
    {
        console.log('The number is divisible by 10')
    }
    else if (arg1 % 7 ===0) {console.log('The number is divisible by 7')}
    else if (arg1 % 6 ===0) {console.log('The number is divisible by 6')}
    else if (arg1 % 3 ===0) {console.log('The number is divisible by 3')}
    else if (arg1 % 2 ===0) {console.log('The number is divisible by 2')}
    else {console.log('Not divisible')}
}

solve(6);