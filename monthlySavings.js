function monthlySavings(input)
{
    if(input[0] !== '[')
    {
        return "invalid input.";
    }

    let [array, living] = input.split("],");
    
    let payments = array.slice(1).split(",").map(Number);

    let savings = 0;

    for(let i=0; i<payments.length; i++)
    {
        if(payments[i] >= 3000) 
        {
            savings += (payments[i] - (payments[i]/5));
        }
        else 
        {
            savings += payments[i];
        }
    }

    savings -= parseInt(living.trim());

    if(savings >= 0) return savings;

    return "earn more";
}

let input = prompt("Enter values in the format: [100,2000,3000],1000");
console.log(monthlySavings(input));

// [1000,2000,3000],5400
// [1000,2000,2500],5000
// [900,2700,3400],10000
// 100,[200,100]