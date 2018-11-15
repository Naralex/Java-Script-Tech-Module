function trains(array) {
    let numberOfPassengers = array[0].split(' ');
    let wagonMaxCapacity = array[1];

    for (let i = 2; i < array.length; i++)
    {
        let currentOperation = array[i].split(' ');
        if (currentOperation[0] === 'Add')
        {
            numberOfPassengers.push(currentOperation[1]);
        }
        else {
            let added = false;
            for (let j = 0; j < numberOfPassengers.length; j++)
            {
                if (Number(array[i]) + Number(numberOfPassengers[j]) <= Number(wagonMaxCapacity) && added === false){
                    numberOfPassengers[j] = Number(array[i]) + Number(numberOfPassengers[j]);
                    added = true;
                }

            }
        }
    }
    console.log(numberOfPassengers.join(' '));
}
trains(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);