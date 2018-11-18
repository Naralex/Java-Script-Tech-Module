function solve03(input) {
    let palindromeFound = false;
    let palindromes = new Array();
    let arr = input.map((a) => {
        a = a.replace(/ /g,'');
            if (a === a.split('').reverse().join('')) {
                palindromes.push(a);
                palindromeFound = true;
            }
    });

    if (!palindromeFound){
        console.log('No palindromes found');
    }else {
        console.log(palindromes.join(', '));
    }
}
solve03([' stella won no wallets',
    ' stella won no wallets',
    'not a palindrome']
);