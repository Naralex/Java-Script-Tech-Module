function solve01(input) {
    let budget = input[0];

    let flourCost = (input[2] * (input[1] - Math.floor(input[1]/5) )).toFixed(2);
    let eggsCost = (input[3]*10*input[1]).toFixed(2);
    let apronCost = (input[4] * Math.ceil((input[1]*1.2)) ).toFixed(2);

    let TotalCost = Number(flourCost) + Number(eggsCost) + Number(apronCost);

    if (TotalCost <= budget){
        console.log(`Items purchased for ${TotalCost.toFixed(2)}$.`);
    } else{
        console.log(`${(TotalCost-budget).toFixed(2)}$ more needed.`);
    }
}
solve01([ '50', '2', '1.0', '0.10', '10.0' ]);
// solve01([ '100', '25', '4.0', '1.0', '6.0' ]);