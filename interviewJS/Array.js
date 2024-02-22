//Array in muttable chanege original array value//
let marks_class_12  = [11,12,13,14,15]
let points = new Array(21,22,23,24,25)// new array use keyword// 
console.log(points)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[5])//index start 0 to 1 5 in undefined//
console.log(marks_class_12.length)// length 5//
marks_class_12[5]=16//add index value in array//
marks_class_12[6]=17
marks_class_12[0] = 21 //changing the value in array//
for(let i = 0; i<marks_class_12.length; i++ ){
    console.log(marks_class_12[i])
}




console.log(typeof marks_class_12)//object type //