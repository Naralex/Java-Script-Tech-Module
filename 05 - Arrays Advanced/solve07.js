function solve07(arr,arg1) {
    let cutArray = arr.slice(0, arg1[0]);
    cutArray.splice(0, arg1[1]);
    let count = 0;

    for (let el of cutArray){
        if (el === arg1[2])
        {
            count++;
        }
    }
    console.log(`Number ${arg1[2]} occurs ${count} time.`)
}
solve07([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);