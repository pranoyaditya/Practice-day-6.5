var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

for(let i=0; i<numbers.length; i++)
{
    let val = numbers[i];
    let count = 0;

    for(let j=0; j<numbers.length; j++)
    {
        if(val == numbers[j]) count++;
    }

    if(count == 1)
    {
        console.log(val);
    }
}