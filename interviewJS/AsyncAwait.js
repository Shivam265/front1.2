async function rohit(){
    let noidaweather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg")
        },3000)
    })
    
    let delhiweather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("22 deg")
    
    
        },5000)
    })
    
    
    //delhiweather.then(alert)
    //noidaweather.then(alert)
    console.log("Fething delhi weather pls wait ...")
    let delhiw = await delhiweather
    console.log("Fetched delhi weather:" + delhiw)
    console.log("Fething noida weather pls wait ...")
    let noidaw = await noidaweather
    console.log("Fetched noida weather:" + noidaw)
    return [delhiw,noidaw]
    
    }
    const cherry = async ()=>{
        console.log("hey i am chery and i am  working")
    }

    const main1 =  async () => {
    console.log("wheather the control room")
    let a = await rohit()
    let b = await cherry()
    
}
    main1()