function camel(input)
{
    let result=``
    for(i=0;i<input.length;i++) 
    {
        currentchar=input[i]
        if(currentchar==currentchar.toUpperCase())
        {
            result=result + `_` + currentchar.toLowerCase()
        }
        else{
            result=result+currentchar
        }
    }
    console.log(result)
}
camel(`thisIsCamelCaseProgram`)