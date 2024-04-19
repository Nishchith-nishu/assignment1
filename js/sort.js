// let x=["pineapple","mango","orange","apple"]

let x=[1,5,2]
let y=''
for(i=0;i<=x.length;i++)
{
    for(j=i;j<=x.length;j++)
    {
        if(x[i]<x[j]){
        y=x[i]
        x[i]=x[j]
        x[j]=y
    }
}
}
console.log(x)