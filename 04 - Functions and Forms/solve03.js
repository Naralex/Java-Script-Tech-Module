function solve(arg1, arg2) {
    let start = arg1.charCodeAt(0);
    let end = arg2.charCodeAt(0);
    let result = [];
    if (start < end)
    {
        for (start = start + 1; start < end; start++)
        {
            result.push(String.fromCharCode(start));
        }
    }
    else {
        for (end = end + 1; end < start; end++)
        {
            result.push(String.fromCharCode(end));
        }
    }

    console.log(result.join(' '))
}
solve('C', '#');