function solve(arg1) {
    let patternLenght = /^.{6,10}/;
    let patternLettterDigit = /^[0-9A-Za-z]+$/;
    let patternDigitLen = /^.*\d{2,}.*$/;

    if (!patternLenght.test(arg1))
    {
        console.log("Password must be between 6 and 10 characters");
    }if (!patternLettterDigit.test(arg1))
    {
        console.log("Password must consist only of letters and digits");
    }if (!patternDigitLen.test(arg1))
    {
        console.log("Password must have at least 2 digits");
    }
    if (patternLenght.test(arg1) && patternLettterDigit.test(arg1) && patternDigitLen.test(arg1)){
        console.log("Password is valid");
    }
}
solve('Pa$s$s');