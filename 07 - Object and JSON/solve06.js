function solve06(input) {
    input.shift();
    let jsonTowns = [];

    for (let inputRow of input){
        let [ town, lat, long] = inputRow
            .split('|')
            .filter(Boolean)
            .map(el => el.trim());

        lat = +Number(lat).toFixed(2);
        long = +Number(long).toFixed(2);

        jsonTowns.push(JSON.stringify({
            Town: town,
            Latitude: lat,
            Longitude: long}));
    }

    console.log(`[${jsonTowns.join(',')}]`)
}
solve06(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);