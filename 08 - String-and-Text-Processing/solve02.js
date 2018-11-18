function solve02(input) {
    let words = input.split(' ');
    let re = new RegExp('^#[a-zA-Z]+$');

    for (let word of words){
        if (word.match(re)) {
            console.log(word.substring(1));
        }
    }
}
solve02('Nowadays everyone uses # to tag a #special word in #socialMedia');