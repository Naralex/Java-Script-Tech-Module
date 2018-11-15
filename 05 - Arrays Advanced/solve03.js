function solve03(arr) {
    let arraySplit = arr.map(x => x.split(' '));
    let list = [];

    for (let i = 0; i< arraySplit.length; i++)
    {
        if (arraySplit[i].length === 3){
            if (list.includes(arraySplit[i][0])){
                console.log(`${arraySplit[i][0]} is already in the list!`);
            }
            else {
                list.push(arraySplit[i][0]);
            }
        }
        else {
            if (list.includes(arraySplit[i][0])){
                list.splice(list.indexOf(arraySplit[i][0]), 1);
            }
            else {
                console.log(`${arraySplit[i][0]} is not in the list!`);
            }
        }
    }
    list.map(x => console.log(x));
}
// solve03(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']);
solve03(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);