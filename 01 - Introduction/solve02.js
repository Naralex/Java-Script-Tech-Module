function f(arg1) {

    let cuts = 0;
    let size = arg1;

    do {
        size /= 2;
        cuts++;
    }
    while (size >= 1);

    console.log(`Length is ${size.toFixed(2)} cm. after ${cuts} cuts.`)
}

f(1000);