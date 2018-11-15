function solve02(arr) {
    let unique = [...new Set(arr)];
    console.log(unique.join(' '));
}
solve02([7, 8, 9, 7, 2, 3, 4, 1, 2]);