function f(arr) {

    let user = arr[0];

    for (let i = 1; i <= arr.length-1; i++)
    {
        let paswrd = [];
        // console.log(arr[i]);
        for (let elem in arr[i])
        {
            // console.log(elem);
            paswrd.push(arr[i][elem])
        }
        paswrd = paswrd.reverse();
        paswrd = paswrd.join('');
        // console.log(paswrd);

        if (paswrd === user)
        {
            console.log(`User ${arr[0]} logged in.`);
        }
        else if (i === 4){console.log(`User ${arr[0]} blocked!`)}
        else {console.log('Incorrect password. Try again.')}
    }
}

f(['Acer','login','go','let me in','recA']);