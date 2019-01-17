function solve02(input) {
    let activationKeys = input[0].split('&');
    let validKeys = [];

    for (let key of activationKeys){
        if (key.match(/\b[a-zA-Z0-9]{16}\b/g)){
            key = key.split('');
            let mapUpper = key.map(a => {
                if (!isNaN(Number(a))){
                    return 9 - Number(a);
                }
                else {
                    return a.toUpperCase();
                }});
            validKeys.push(insertDash(mapUpper.join(''), 4));
        }
        else if (key.match(/\b[a-zA-Z0-9]{25}\b/)){
            key = key.split('');
            let mapUpper = key.map(a => {
                if (!isNaN(Number(a))){
                    return 9 - Number(a);
                }
                else {
                    return a.toUpperCase();
                }});
            validKeys.push(insertDash(mapUpper.join(''), 5));
        }
    }

    function insertDash(str, n) {
        let ret = [];
        for(let i = 0, len = str.length; i < len; i += n) {
            ret.push(str.substr(i, n))
        }
        return ret.join('-');
    }

    console.log(validKeys.join(', '));
}
// solve02(['xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS']);
solve02([ 't1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs' ]);