function solve(arg1, arg2, arg3) {
    function sum(arg1, arg2){
        return arg1 + arg2;
    }
    function subtract(sum, arg3){
        return sum - arg3;
    }
    console.log(subtract(sum(arg1,arg2),arg3));
}