function rev(input)
{
    let x=``
    for(i=input.length-1;i>=0;i--)
    {
        x=x+input[i]
    }
    console.log(x)
}
rev(`apple`)