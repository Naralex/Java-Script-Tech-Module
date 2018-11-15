function solve10(arg1, arg2){

    console.log((calcFactorial(arg1)/calcFactorial(arg2)).toFixed(2));

    function calcFactorial(arg){
        let result = 1;
        for (arg; arg > 0; arg--){
            result *= arg;
        }
        return result
    }
}
solve10(5, 2);