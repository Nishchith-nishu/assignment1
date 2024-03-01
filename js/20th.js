function remdup(arr1, arr2) {
    let ab = arr1.concat(arr2)
    let res = []
    
    for (let i = 0; i < ab.length; i++) {
        if (!res.includes(ab[i])) {
            res.push(ab[i]);
        }
    }
    
    return res;
}

let a = [1, 2, 3, 4, 5]
let b = [5, 3, 7, 8, 9]

let res = remdup(a, b)
console.log(res)
