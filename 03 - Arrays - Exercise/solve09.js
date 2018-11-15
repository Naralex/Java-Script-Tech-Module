function solve09(arr) {
    let leftmostStartingIndex = arr.length;
    let bestSequenceSum = -1;
    let bestSequenceCount = -1;
    let bestSequenceIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        let currentSequence = arr[i].split('!').map(Number);
        let bestSubsequenceCount = 0;
        let bestStartingIndex = 0;
        for (let j = 0; j < currentSequence.length; j++) {
            if (currentSequence[j] === 0) {
                continue;
            }
            let currentSubsequenCounter = 1;

            for (let k = j + 1; k < currentSequence.length; k++) {
                if (currentSequence[k] === 1) {
                    currentSubsequenCounter++;
                } else {
                    break;
                }
            }
            if (currentSubsequenCounter > bestSubsequenceCount) {
                bestSubsequenceCount = currentSubsequenCounter;
                bestStartingIndex = j;
            }
        }
        let currentSum = 0;

        let arr1 = arr[i].split('!').map(Number);

        for (let j = 0; j < arr1.length; j++) {
            currentSum += arr1[j];
        }
        if (bestSubsequenceCount > bestSequenceCount) {
            bestSequenceCount = bestSubsequenceCount;
            bestSequenceIndex = i;
            if (bestStartingIndex < leftmostStartingIndex) {
                leftmostStartingIndex = bestStartingIndex;
            }
            bestSequenceSum = currentSum;
        } else if (bestSubsequenceCount === bestSequenceCount) {
            if (bestStartingIndex < leftmostStartingIndex) {
                leftmostStartingIndex = bestStartingIndex;
                bestSequenceCount = bestSubsequenceCount;
                bestSequenceIndex = i;
                bestSequenceSum = currentSum;
            } else if (bestStartingIndex === leftmostStartingIndex) {
                if (currentSum > bestSequenceSum) {
                    bestSequenceSum = currentSum;
                    bestSequenceCount = bestSubsequenceCount;
                    bestSequenceIndex = i;
                }
            }
        }
    }
    console.log(`Best DNA sample ${bestSequenceIndex} with sum: ${bestSequenceSum}.`);
    // console.log(arr[bestSequenceIndex].split('!').join(' '));

    let output = '';
    for(let i = 0; arr[bestSequenceIndex].length; i++)
    {
        if (arr[bestSequenceIndex][i] !== 0)
        {
            output += arr[bestSequenceIndex][i] + ' ';
        }
    }
    console.log(output);
}

solve09([5, '1!0!1!1!0', '0!1!1!0!0']);