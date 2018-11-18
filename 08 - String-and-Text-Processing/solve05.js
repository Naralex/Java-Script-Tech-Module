function solve05(input) {
    input.split(' ').map((a) => {
       if (a.startsWith(':') && a.length === 2){
           console.log(a);
       }
    });
}
solve05('There are so many emoticons nowadays :dD I have many ideas :O what input to place here :)');