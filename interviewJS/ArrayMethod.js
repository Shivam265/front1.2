/*//Array Method in js//
let num  = [1,2,3,34,5]
let b = num.toString()//toString() method is used in string convert//
console.log(b)

let c = num.join("and")// num.join method is used in join number// 
console.log(c)
/*let r = num.pop()//pop end element return the popped element//
console.log(num,r)*/
/*let r = num.push(44)// push return new array length//
console.log(num,r)*/

/*let r = num.shift()//remove  start element in original array modify//
console.log(r,num)*/

/*let r = num.unshift(45)//add start element  in original array modify and reutun new array length//
console.log(r,num)*/

// delete operator//
/*let num = [1,2,3,4,5,6,7,8,9]
let num_more = [11,12,13,14,15,16,17,18,19]
//console.log(num.length)
//delete num[0]//array original length not affected in delete operator//
//console.log(num.length)

let newArray = num.concat(num_more)//concat() method used in add array new array return //
console.log(newArray)
console.log(num,num_more)*/

// sort method//
/*let compare=(a,b)=>{//comapre fumction used in value(a,b) compare
    return a-b 


}
let num = [411,21,31,411,51,61,711,81,91]
num.sort(compare) //sort() method used in original array modify and alphabetical short array//
//num.reverse()// reverse value in array //
console.log(num)*/

//splice method//
let num = [1,2,3,4,5,6,7,8,9]
//num.splice(2,3,1021,1022,1023)//splice method delete element to modify value//
//console.log(num)

let newNum = num.slice(3)//new array create and not original modify//
console.log(newNum)




