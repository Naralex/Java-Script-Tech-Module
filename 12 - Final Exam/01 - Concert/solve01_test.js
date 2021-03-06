function solve(input) {
    let map = new Map();
    let timeMap = new Map();
    let bandToPrint = input[input.length-1];
    //console.log(bandToPrint);
    for (let data of input){
        //console.log(data);
        if (data === 'start of concert'){
            break
        }else{
            let [command, bandName, otherData] = data.split('; ');
            //console.log(command);
            //console.log(bandName);
            //console.log(otherData);
            if(command === "Add"){
                let members = otherData.split(', ');
                if(!map.has(bandName)){
                    map.set(bandName,members)
                }else{
                    let current = map.get(bandName);
                    let toAdd = [];
                    for (let name of members){
                        if(!current.includes(name)){
                            toAdd.push(name)
                        }

                    }
                    let forMap = current.concat(toAdd);
                    //console.log('current ->'+current);
                    //console.log('to add ->'+toAdd);
                    //console.log('new one  ->'+forMap);
                    map.set(bandName,forMap)
                }
                //console.log(map)
            }else if(command ==="Play"){
                let time = Number(otherData);
                if(!timeMap.has(bandName)){
                    timeMap.set(bandName,time)
                }else{
                    let currentTime = timeMap.get(bandName);
                    let toAdd = currentTime + time;
                    timeMap.set(bandName,toAdd)
                }
            }
            // console.log(timeMap);

        }

    }
    let sorted = [...timeMap]
        .sort(customSort);
    //console.log(sorted);
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



solve(['Add; The Beatles; John Lennon, Paul McCartney' ,
    'Add; The Beatles; Paul McCartney, George Harrison' ,
    'Add; The Beatles; George Harrison, Ringo Starr' ,
    'Play; The Beatles; 3698' ,
    'Play; The Beatles; 3828' ,
    'start of concert' ,
    'The Beatles'])