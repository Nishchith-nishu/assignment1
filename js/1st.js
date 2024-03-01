//2nd maximum
// let x=[1,10,20,11,22,100,,99,44]
// let a=x[0]
// let b=x[1]
// for(i=0;i<x.length;i++)
// {
//     if(x[i]>a)
//     {
//         b=a
//         a=x[i]
//     }
//     else if(x[i]>b && x[i]<a)
//     {
//         b=x[i]
//     }   
// }
// console.log(b)





// 2nd min number
let x=[100,9,12,1,4,25]
let a=x[0]
let b=x[1]
for(i=0;i<x.length;i++)
{
    if(x[i]<a)
    {
        b=a
        a=x[i]
    }
    else if(x[i]<b && x[i]>a)
    {
        b=x[i]
    }
}
console.log(b)