function solve06(arg1, arg2) {

    while (arg1.includes(arg2[0])) {
        for (let i = 0; i < arg2[1]; i++) {
            if ((arg1.indexOf(arg2[0]) - 1) >= 0) {
                arg1.splice(arg1.indexOf(arg2[0]) - 1, 1);
            }
        }
        arg1.splice(arg1.indexOf(arg2[0]), arg2[1] + 1);
    }
    console.log(arg1.reduce((a, b) => a + b, 0));
}
// solve06([1, 4, 4, 2, 8, 9, 1],
//     [9, 3]
// );
// solve06([1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2]
// );
// solve06([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]);
solve06([1, 7, 7, 1, 2, 3],
    [7, 1]);