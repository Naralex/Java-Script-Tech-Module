function solve(arr) {
    let carsInLot = [];

    for(let el of arr) {
        let split = el.split(', ');
        let command = split[0];
        let carNumber = split[1];

        if (command === 'IN') {
            if (!carsInLot.includes(carNumber)){
                carsInLot.push(carNumber);
            }
        } else {
            if (carsInLot.includes(carNumber)){
                let index = carsInLot.indexOf(carNumber);
                carsInLot.splice(index, 1);
            }
        }
    }
    carsInLot = carsInLot.sort();
    if (carsInLot.length > 0) {
        carsInLot.sort((a, b) => {
            let aSum = 0;
            let bSum = 0;
            if (a.length === 8) {
                let aArr = a.split('').slice(2, 6);
                aSum = aArr.reduce((d, c) => d + c, 0);
            }
            else {
                let aArr = a.split('').slice(1, 5);
                aSum = aArr.reduce((d, c) => d + c, 0);
            }

            if (b.length === 8) {
                let bArr = b.split('').slice(2, 6);
                bSum = bArr.reduce((d, c) => d + c, 0);
            }
            else {
                let bArr = b.split('').slice(1, 5);
                bSum = bArr.reduce((d, c) => d + c, 0);
            }
            return +aSum - +bSum;
        });
        carsInLot = carsInLot.sort();
        console.log(carsInLot.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, Z9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'OUT, CA1234TA',
    'IN, X2822UU']);
// solve(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']
// );