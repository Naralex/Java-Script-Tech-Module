function solve07(arr) {
    arr = arr[0].split(' ');
    let longestSquence = [];
    let leftmostIndex = 0;

    for (let i = 0; i < arr.length; i++){
        let currnetEl = arr[i];
        let currentSequence = [currnetEl];

        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];

            if (nextEl === currnetEl)
            {
                currentSequence.push(nextEl);
            }
            else {break;}
        }
        if (currentSequence.length > longestSquence.length)
        {
            longestSquence = [];
            for (let k = 0; k < currentSequence.length; k++)
            {
                longestSquence.push(currentSequence[k]);
            }
        }
        else if (currentSequence.length === longestSquence.length)
        {
            if (i < leftmostIndex) {
                leftmostIndex = i;
            }
        }
    }
    console.log(longestSquence.join(' '))
}
solve07(['1 1 1 2 3 1 3 3']);