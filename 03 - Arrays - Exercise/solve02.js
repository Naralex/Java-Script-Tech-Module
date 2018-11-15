function solve(arr1, arr2) {
    let newArr = arr1.map(function (el, index){if (index % 2 ===0){return Number(el) + Number(arr2[index])}else {return el + arr2[index]}});
    console.log(newArr.join(' - '));
}
solve(["5", "15", "23", "56", "35"],
    ["17", "22", "87", "36", "11"]
);