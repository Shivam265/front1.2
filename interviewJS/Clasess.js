class RailwaysForm {
    submit() {
        alert( this.name + ":form submitted" + this.trainno)
    }

    cancel() {
        alert(this.name + ":this firm is cancelled" + this.trainno)
    }
    fill(givenname,trainno) {
        this.name = givenname
        this.trainno = trainno
    }
}
// create a form for rohit//
let rohitForm = new RailwaysForm() // rohitForm() in object class//
// fill the form with rohit details 
rohitForm.fill("rohit",12141)
// create a form for rohan//
let rohanForm1 = new RailwaysForm()
let rohanForm2 = new RailwaysForm()
// fill the form with rohit details
rohanForm1.fill("rohan",12412)
rohanForm2.fill("rohan",12312)

rohitForm.submit()//method in submit() call a funcion// 
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()
