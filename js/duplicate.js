function dup(a){
    let result=[]
    for(i=0;i<a.length;i++){
        if(result.indexOf(a[i])==-1){
            result.push(a[i])
        }
    }
    return result
 }
 console.log(dup([1,2,3,1,2,4,3,5,4,5]))