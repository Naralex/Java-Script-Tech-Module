function solve05(arr) {
    arr.sort();
    arr.sort(function(a, b){
        return a.length - b.length;});
    arr.map(x => console.log(x));
}
solve05(["test", "Deny", , "Default", "omen"]);