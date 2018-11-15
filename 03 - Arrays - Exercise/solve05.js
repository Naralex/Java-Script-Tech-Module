function solve(arr) {
    let current = 0;
    let i = 1;

    while (current !== arr.length - 1) {
        if (arr[current] <= arr[current + i]) {
            arr.splice(current, 1);
            i = 1;
        }
        else {
            if (current + i === arr.length) {
                i = 1;
                current++;
            }
            else {
                i++;
            }
        }

    }
    console.log(arr.join(' '));
}


solve([41, 41, 34, 20]);