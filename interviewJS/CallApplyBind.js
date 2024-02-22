// call,apply,bind()//
//Problem statement//
let userDetails = {
    name:"rohit",
    age:25,
    Designation:"Software Enginner",

    }
let printDetails=function(state,country){
        console.log(this.name+" "+state+" "+country)//this keyword used in object refer and object inside property access//
}
printDetails.call(userDetails,"Delhi","India")


let userDetails2 = {
    name:"mohit",
    age:24,
    Designation:"Software Enginner",
    
}
printDetails.call(userDetails2,"Delhi","India");//call in direct indivisual value  list //
printDetails.apply(userDetails2,["Delhi","India"]);//apply in method used argumment in array list//
let newfun = printDetails.bind(userDetails2,"Delhi","India");// bind used in function copy in after invoked return //
//console.log(newfun);// all property return //
newfun()