function solve06(input) {
    let destination = [];

    for (let el of input){
        let data = el.split(' > ');
        data[0].push(data[1], data[2]);
        destination.push(el[0])
    }

    // for (let el of destination)
    // {
    //     console.log(el);
    // }

    console.log(destination);
}
solve06(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]);