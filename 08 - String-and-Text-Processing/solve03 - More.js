function solve(str) {
    let text=str.split(' ');
    let name=[];

    text = text.map((a) => {
        if ((a.startsWith('*') && a.endsWith('*')) &&
            (a[1] === a[1].toUpperCase() && a.substr(2) === a.substr(2).toLowerCase())){
            name.push(a);}
        else {return a;}});

    console.log(name.join(', '));
    console.log('*'.repeat(20));
    console.log(text.filter(arr => arr).join(' '));
}
solve("Oh my *RruD* dwarfs! This *Dasher* year's christmas *Prancer is about to be Comet* ruined because Santa has lost his deer and.")