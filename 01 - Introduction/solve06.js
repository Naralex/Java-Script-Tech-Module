function f(start, end) {
    let sum = 0;
    let result = [];
    do {
        result += ' '+start;
        sum += start;
        start++;
    }while (start <= end);
    console.log(result);
    console.log(`Sum: ${sum}`);
}

f(5,10);