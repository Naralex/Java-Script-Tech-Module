function solve10(array) {
    let ladyBugsStartingPositions = array[1].split(' ');
    let fieldArray = new Array(array[0]).fill(0);

    for (let i = 0; i < ladyBugsStartingPositions.length; i++) {
        if (Number(ladyBugsStartingPositions[i]) > 0 && array[0]){
            fieldArray[Number(ladyBugsStartingPositions[i])] = 1;
        }
    }

    for (let j = 2; j < array.length; j++) {
        let ladyBugMoves = array[j].split(' ');

        for (let i = 0; i < fieldArray.length; i++) {
            if (Number(ladyBugMoves[0]) === i && fieldArray[i] === 1) {
                fieldArray[i] = 0;

                if (ladyBugMoves[1] === 'right') {
                    if (i + (Number(ladyBugMoves[2])) < fieldArray.length && i + (Number(ladyBugMoves[2])) > 0) {
                        fieldArray[i + Number(ladyBugMoves[2])] = 1;
                    }}
                else{
                    if (i - (Number(ladyBugMoves[2])) > 0 && i - (Number(ladyBugMoves[2])) < fieldArray.length) {
                        fieldArray[i - Number(ladyBugMoves[2])] = 1;
                    }
                }
            }
        }
    }
    console.log(fieldArray.join(' '));
}

solve10([ 1000, '0 1 2',
    '-3 left 2',
    '1 left -200000']


);