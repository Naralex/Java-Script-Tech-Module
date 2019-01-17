function solve01(input) {
    let bandsPlayedTime = new Map();
    let bandMembers = new Map();

    for (let elements of input) {
        if (elements !== 'start of concert') {
            let [action, band, info] = elements.split('; ');

            if (action === 'Add') {
                let members = info.split(', ');
                if (!bandMembers.has(band)) {
                    bandMembers.set(band,members)
                }
                else {
                    let currentMembers = bandMembers.get(band);
                    let addMembers = [];
                    for (let name of currentMembers){
                        if(!currentMembers.includes(name)){
                            addMembers.push(name)
                        }
                    }

                }
            }else if(action ==="Play"){
                let time = Number(info);
                if(!bandsPlayedTime.has(band)){
                    bandsPlayedTime.set(band,time)
                }else{
                    let currentTime = bandsPlayedTime.get(band);
                    let toAdd = currentTime + time;
                    bandsPlayedTime.set(band,toAdd)
                }
            }
        } else { break}
    }
console.log(bandMembers);

    let sorted = [...timeMap]
        .sort(customSort);
    let totalTime = totalCalc(timeMap)
    console.log(`Total time: ${totalTime}`);
    for(let [band,time] of sorted){
        console.log(`${band} -> ${time}`);
    }
    for(let [band,members] of map){
        if(band === bandToPrint){
            console.log(bandToPrint)
            for(let name of members){
                console.log(`=> ${name}`);
            }

        }


    }
    function customSort(a,b) {
        let firstCriteria = b[1] - a[1];
        if (firstCriteria===0){
            return a[0].localeCompare(b[0])
        }
        return firstCriteria
    }
    function totalCalc (map){
        let total = 0;
        for(let [name,time] of map){
            total += time
        }
        return total
    }

}
solve01(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones']
);
// solve01(['Add; The Beatles; John Lennon, Paul McCartney',
//     'Add; The Beatles; Paul McCartney, George Harrison',
//     'Add; The Beatles; George Harrison, Ringo Starr',
//     'Play; The Beatles; 3698',
//     'Play; The Beatles; 3828',
//     'start of concert',
//     'The Beatles']);