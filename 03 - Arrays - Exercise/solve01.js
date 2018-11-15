function solvef(arr) {
    let newArray = arr.map(function(currElement, index){ let newEelemtn = 0;
        if(currElement % 2 === 0){newEelemtn = currElement + index;}
        else {newEelemtn = currElement - index}
        return newEelemtn});

}
solvef([5, 15, 23, 56, 35]);