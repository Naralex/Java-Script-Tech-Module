function solve(arr) {
    let words = arr.shift().split(' ');

    let map = new Map();
    for(let i = 0; i < words.length; i++)
    {
        map.set(words[i], 0)
    }

    for(let word of arr)
    {
        if (map.has(word))
        {
            let oldCount = map.get(word);
            map.set(word, oldCount + 1);
        }
    }
    let sortMap = [...map].sort((a,b) => {let aCount = a[1]; let bCount = b[1]; return bCount - aCount;})
    sortMap.forEach((kvp) => {
        let [word, count] = kvp;
        console.log(`${word} - ${count}`)
    })
}
solve(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task']
);