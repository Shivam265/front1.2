let num = [11,12,13,14,15,16]
/*for(let i=0; i<num.length; i++){
    console.log(num[i]);
}*/

// forEach loop used in array in one element preform  in js//
num.forEach((element)=>{
    console.log(element*element)

})

// Array from used in array create using //
let name = "rohit"
let arr = Array.from(name)
console.log(arr)

// for of loop used in array access //
/*for(let i of num){
    console.log(i)
}*/

// for in loop //
for(let i in num){
    console.log(num[i])
}
