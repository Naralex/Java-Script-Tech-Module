function solve01(arg1, arg2) {
    let words = arg1.split(', ');
    let sentanse = arg2.split(' ');

    for (let wSent of sentanse) {
        // console.log(wSent);
        for (let w of words) {
            if (wSent.includes('*') && wSent.length === w.length) {
                sentanse[sentanse.indexOf(wSent)] = w;
                // console.log(wSent);
                // console.log(w);
            }
        }
    }

    console.log(sentanse.join(' '));
}

// solve01('great',
//     'softuni is ***** place for learning new programming languages'
// );
solve01('great, learning',
    'softuni is ***** place for ******** new programming languages'
);