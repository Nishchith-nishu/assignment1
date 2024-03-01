let originalObject={
    student:"nishchi",
    age:{palce:`tiptur`}
}
let deepCopy=JSON.parse(JSON.stringify(originalObject))
deepCopy.age.palce="tumkr"
console.log(`the is original object is not effected`,originalObject)
console.log(`the object is modified`,deepCopy)