function solve(arr){
    let map1 = arr.map(Number);
    let biggestProduct = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < map1.length; i++){
        let s = map1[i];

        if (s >= 0 && s < 10) {
            let start = i +1;
            let end = i + s;
            let currentProduct = 1;

            for (let j = start; j <= end; j++) {
                currentProduct *= map1[j];
            }
            if (currentProduct > biggestProduct){
                biggestProduct = currentProduct;
            }
        }
    }
    console.log(biggestProduct)
}
solve(['100',
    '200',
    '2',
    '3',
    '2',
    '3',
    '2',
    '1',
    '1']

);
