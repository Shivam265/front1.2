/*class RailwaysForm {
    constructor(givenname,trainno){

        console.log("constructor is called" + givenname +" "+  trainno)
            this.name = givenname
            this.trainno = trainno
        }
    submit() {
        alert( this.name + ":form submitted" + this.trainno)
    }

    cancel() {
        alert(this.name + ":this firm is cancelled" + this.trainno)
    }
   
}
// create a form for rohit//
let rohitForm = new RailwaysForm() // newRailwayForm() in object class//
// no need to fill the form with rohit details 
//rohitForm.fill("rohit",12141)
// create and fill  form for rohan//
let rohanForm1 = new RailwaysForm("rohan",12412)
let rohanForm2 = new RailwaysForm("rohan",12312)
rohitForm.submit()//method in submit() call a funcion// 
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()*/

// constructor2.js//
class RailwaysForm {
    constructor(givenname,trainno,address){

        console.log("constructor is called" + givenname +" "+  trainno)
            this.name = givenname
            this.trainno = trainno
            this.address = address
        
        }

        preview() {
            alert( this.name + ":form submitted" + this.trainno + "and your address" + this.address)
            
        }    
    submit() {
        alert( this.name + ":form submitted" + this.trainno)
        
    }

    cancel() {
        alert(this.name + ":this firm is cancelled" + this.trainno)
    }
   
}

let rohanForm = new RailwaysForm("rohit","12121","kanpue","coach")
rohanForm.preview()
rohanForm.submit()
