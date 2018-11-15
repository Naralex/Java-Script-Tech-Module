function solve07(input) {
    let set = new Set();

    for (let el of input) {
        set.add(el);
    }

    let sortedSet = [...set.keys()].sort((a, b) => {return a.length - b.length || a.localeCompare(b)});

    for (let el of sortedSet){
        console.log(el);
    }
}
solve07(["Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"]
);