function snake(input){
    let out=``
    let capital=false
    for(i=0;i<input.length;i++)
    {
        let currentchar=input[i]
        if(currentchar==`_`)
        {
            capital=true
        }
        else if(capital)
        {
            out+=currentchar.toUpperCase()
            capital=false
        }
        else
        {
            out+=currentchar
        }
        }
        return out
    }
    console.log(snake(`this_is_camel_case_program`))