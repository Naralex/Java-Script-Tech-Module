function solve(text) {
    let array = text.split(/[\.\?\s\!\,]+/g);
    if (array[array.length-1] === "")
    {
        array.pop();
    }

    let longestCount = 0;
    let longestWord = '';
    let shortestCount = 0;
    let shortestWord = '';

    for (let word of array)
    {
        if (word.length > longestCount)
        {
            longestCount = word.length;
            longestWord = word;
        }
        if (shortestCount === 0 || word.length < shortestCount)
        {
            shortestCount = word.length;
            shortestWord = word;
        }
    }
    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest -> ${shortestWord}`);
}
solve("Lorem Ipsum is simply dummy text of the printi_as-dng's and typesetting industry.");