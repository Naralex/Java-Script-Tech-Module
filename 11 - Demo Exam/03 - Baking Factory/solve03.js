function solve03(input) {
    let batchWight = [];

    for (let element of input){
        if (element !== 'Bake It!'){
            element = element.split('#');

            let batch = [
                element.join(' '),
                element.reduce((a, b) => Number(a) + Number(b), 0),
                element.length,
                element.reduce((a, b) => Number(a) + Number(b), 0) / element.length
            ];
            // console.log(batch);
            batchWight.push(batch);
        }
        else {break;}
    }
    let test = [...batchWight].sort((a,b) => {
        let aCount = a[1]; let bCount = b[1];
        if (aCount === bCount){
            let aCount = a[3]; let bCount = b[3];
            if (aCount === bCount){
                let aCount = a[2]; let bCount = b[2];
                return aCount - bCount;
            }
            else {
                return bCount - aCount;
            }
        }
        else{
            return bCount - aCount;
        }
    });
    // test = [...test].sort((a,b) => {
    //     let aCount = a[3]; let bCount = b[3];
    //     return bCount - aCount;
    // });
    // test = [...test].sort((a,b) => {
    //     let aCount = a[2]; let bCount = b[2];
    //     return aCount - bCount;
    // });

    let winner = test.shift();
    // console.log(winner);
    console.log(`Best Batch quality: ${winner[1]}`);
    console.log(`${winner[0]}`);
}
solve03([ '5#4#10#-2', '10#5#2#3#2', 'Bake It!']);
// solve03(['5#3#2',
//     '5#3#1#1',
//     '10#2#-2#1#-1',
//     '4#2#1',
//     'Bake It!']);