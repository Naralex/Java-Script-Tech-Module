function solve05(arr)
{
    arr = arr.sort(function(a, b){return a - b});
    let smallNumbers = arr.splice(0,arr.length / 2);
    arr = arr.reverse();
    let reorderedArr = [];

    for (let i = 0; i < arr.length; i++)
    {
        reorderedArr.push(arr[i]);
        reorderedArr.push(smallNumbers[i]);
    }

    console.log(reorderedArr.join(' '))
}
solve05([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);