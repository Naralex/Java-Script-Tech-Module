function solve(arr) {
    let result;
    if (arr.length === 1) {
        result = 0;
    }
    else {
        result = 'no';
        for (let i = 0; i < arr.length; i++) {
            let leftsum = 0;
            let rightsum = 0;
            for (let r = i + 1; r < arr.length; r++) {
                rightsum += arr[r];
            }
            for (let l = 0; l < i; l++) {
                leftsum += arr[l];
            }

            if (leftsum === rightsum)
            {
                result = i;
            }
        }
    }
    console.log(result);
}

solve([1, 2, 3, 3]);