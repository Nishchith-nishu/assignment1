function number(array) {
    let result = []
    
    for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
        if ((i + 1) % 3 == 0 && i !== array.length - 1) 
        {
            result.push(0)
        }
    }
    
    return result
}

let input = [1, 2, 3, 4, 5, 6, 6, 7, 8,9]
console.log(number(input)) 

