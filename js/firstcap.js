let x=['abc','def','ghi',`this`]
let y=x.map(el=>(el.charAt(0).toUpperCase()+el.slice(1).toLowerCase()))
console.log(y)
