// callback in js
function loadScript(src,callback){
    var script  = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("script loded with src:" + src)
        callback(null,src);
    }

    script.onerror = function(){
        console.log("Error loading script with src" + src)
        callback(new Error("src got some error") )
    }
    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error)
        return 
    }
    alert("hello world" + src);
}

function goodmorning(){
    alert("good morning" + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" , hello)