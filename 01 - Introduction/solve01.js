function f(x) {
    switch (true) {
        case (x >= 0 && x <= 2):
            console.log("baby");
            break;
        case (x >= 3 && x <= 13):
            console.log("child");
            break;
        case (x >= 14 && x <= 19):
            console.log("teenager");
            break;
        case (x >= 20 && x <= 65):
            console.log("adult");
            break;
        case (x >= 66):
            console.log("elder");
            break;
        default:
            console.log("none");
            break;
    }
}

f(0);