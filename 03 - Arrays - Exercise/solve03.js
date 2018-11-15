function f(data, count) {

    while (count > 0){
        data.splice(data.length, 1, data[0]);
        data.splice(0, 1);
        count--;
    }
    console.log(data);
}
f([51, 47, 32, 61, 21], 2);