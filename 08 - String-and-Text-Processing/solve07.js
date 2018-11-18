function solve07(input) {
    console.log((input.substr(0, input.length / 2)).split('').reverse().join(''));
    console.log((input.substr(input.length / 2, input.length)).split('').reverse().join(''));
}
solve07('tluciffiDsIsihTgnizamAoSsIsihT');