function solve04(word, text) {
    if (text.toLowerCase().split(' ').includes(word.toLowerCase().replace(/ /g,''))) {
        console.log(word);
        return;
    } else {
        console.log(`${word} not found!`)
    }
}

solve04('java',
    'Javascript is the best programming language'
);
// solve04('python',
//     'JavaScript is the best programming language'
// )