function solve (qty, stud, day)
{
    let price;
    let totalprice;

    switch (day)
    {
        case 'Friday': price = [{'Students': 8.45, 'Business': 10.90, 'Regular': 15}]; break;
        case 'Saturday': price = [{'Students': 9.80, 'Business': 15.60, 'Regular': 20}]; break;
        case 'Sunday': price = [{'Students': 10.46, 'Business': 16, 'Regular': 22.50}]; break;
        default: price = [{'Students': 8.45, 'Business': 10.90, 'Regular': 15}]; break;
    }

    switch (stud)
    {
        case 'Students': if(qty >= 30){totalprice = ((qty * price[0][stud])*0.85)}else{totalprice = qty * price[0][stud]}; break;
        case 'Business': if(qty >= 100){totalprice = ((qty-10) * price[0][stud])}else{totalprice = qty * price[0][stud]}; break;
        case 'Regular': if(qty >= 10 && qty <= 20){totalprice = ((qty * price[0][stud]) *0.95)}else{totalprice = qty * price[0][stud]}; break;
        default: totalprice = qty * price[0][stud] ; break;
    }

    console.log(`Total price: ${totalprice.toFixed(2)}`)
}
solve(200,
'Business',
'Friday'
);