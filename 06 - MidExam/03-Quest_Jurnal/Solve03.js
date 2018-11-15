function questLog(quest) {
    let begginerQuests = quest[0].split(', ');

    for (let i = 1; i < quest.length; i++){
        if (quest[i] === 'Retire!') {
            break;
        }
        else{
            let currentCommand = quest[i].split(' - ');

            switch (currentCommand[0]) {
                case 'Start': if(!begginerQuests.includes(currentCommand[1])){
                    begginerQuests.push(currentCommand[1]);
                } break;
                case 'Complete': if (begginerQuests.includes(currentCommand[1])){
                    begginerQuests.splice(begginerQuests.indexOf(currentCommand[1]), 1);
                } break;
                case 'Side Quest':
                    let sideQuestChain = currentCommand[1].split(':');
                    if (begginerQuests.includes(sideQuestChain[0])){
                        if (!begginerQuests.includes(sideQuestChain[1])) {
                            begginerQuests.splice(begginerQuests.indexOf(sideQuestChain[0])+1, 0, sideQuestChain[1]);}
                } break;
                case 'Renew': if (begginerQuests.includes(currentCommand[1])){
                    begginerQuests.splice(begginerQuests.indexOf(currentCommand[1]), 1);
                    begginerQuests.push(currentCommand[1]);
                }break;
                default:
                    console.log('Error!');
                    break;

            }
        }
    }
    console.log(begginerQuests.join(', '));
}
// questLog(['Hello World, For loop, If else',
//     'Start - While loop',
//     'Complete - For loop',
//     'Retire!']);
questLog(['Hello World, If else',
    'Complete - Homework',
    'Side Quest - If else:Switch',
    'Renew - Hello World',
    'Retire!']);