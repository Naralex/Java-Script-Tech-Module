function smallestNumber(arg1, arg2, arg3){
    let array1 = new Array();
    array1.push(arg1, arg2, arg3);
    console.log(Math.min(...array1))
}
smallestNumber(1,2,3);