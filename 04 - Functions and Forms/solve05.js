function solve(array) {
    for (let arr of array) {
        let revArr = arr.toString();
        revArr = revArr.split('');
        revArr = revArr.reverse();
        revArr = revArr.join('');
        if (Number(revArr) === arr) {
            console.log('true');
        }
        else {
            console.log('false');
        }
    }
}
solve([123,323,421,121]);