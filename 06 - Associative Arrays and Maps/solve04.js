function solve04(input) {
    let guests = new Map();
    guests.set('VIP', []);
    guests.set('Regular', []);

    let index = input.indexOf('PARTY');
    let guestsInput = input.slice(0, index);

    for (let guestStatus of guestsInput) {
        let guestType = '';
        if (isNaN(Number(guestStatus[0]))) {
            guestType = 'Regular';
        }
        else {
            guestType = 'VIP'
        }
        let guestsForGivenType = guests.get(guestType);
        guestsForGivenType.push(guestStatus);
    }
    for (let i = index + 1; i < input.length; i++) {
        let guest = input[i];
        let guestType = '';
        if (isNaN(Number(guest[0]))) {
            guestType = 'Regular';
        }
        else {
            guestType = 'VIP'
        }
        let guestsForGivenType= guests.get(guestType);
        let index = guestsForGivenType.indexOf(guest);
        guestsForGivenType.splice(index, 1);
    }
    let sortedMap = [...guests].sort((a, b) => {
        return b[0].localeCompare(a[0])});

    let vipCount = guests.get('VIP').length;
    let regularCount = guests.get('Regular').length;
    console.log(regularCount + vipCount);
    for (let [guestType, guestsForGivenType] of sortedMap) {
        if (guestsForGivenType.length > 0){
            console.log(guestsForGivenType.join('\n'))
        }
    }
}

solve04(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);