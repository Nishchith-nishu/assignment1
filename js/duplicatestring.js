let x="HelloWorld"
function rem(){
    let result=``
    for(let i=0;i<x.length;i++){
        let char=x[i]
        if(result.indexOf(char)===-1){
            result=result+char

        }
    }
    return result
}
let result=rem(x)
console.log(result)