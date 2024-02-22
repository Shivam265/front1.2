const sayHello = name => {
    console.log("greeting" +" " + name)
}

//console.log(x.name,x.role)

// this keyword used in refer object//
const x = {
    name:"rohit",
    role:"Front-end developer",
    exp:"2",
    show: function () {
        //let that = this
        //console.log(this)
        setTimeout(()=>{//this, object inside function using in function keyword 'this' in function object, and event inside 'this' element to refer the recieve//  
            console.log('the name is ${this.name}\n  this is exp${this.role}')

        },2000)
    }

}
sayHello("rohit","Good morning")


x.show()