// write a function to calculate the sum of total marks in an array of objects 
// 	ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]


let student=[{
    sub:'Maths', marks:60},
    {sub:'Science', marks:70},
    {sub:'English', marks:90}]

    // let x=student.filter(el=>(el.marks))
    let y=student.reduce((acc,val)=>acc+val.marks,0)
    console.log(y)