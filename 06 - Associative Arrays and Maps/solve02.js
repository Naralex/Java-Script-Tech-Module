function solve02(input) {
    let words = input.toLowerCase().split(' ');

    let map = new Map();

    for(let word of words){
        if (!map.has(word)) {
            map.set(word, 0);
        }
        let oldCoud = map.get(word);
        map.set(word, oldCoud + 1);
    }
    let keys = [...map].filter((kvp) => kvp[1] % 2 === 1).map((kvp) => kvp[0]).join(' ')
    console.log(keys);
}
solve02('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');