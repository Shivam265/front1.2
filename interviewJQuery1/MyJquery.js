$(document).ready(function () {
    console.log("i am new file myjquery")
  //document is ready in after in  code run browser
  console.log("we are using jquery");
  //$('selector').action() jquery is used to $ symbol {$}
  //clicks on all the  p element .this is an examples of element selectors
  //$("p").click(); //click on p element

  //click on function element
  $("p").click(function () {
    console.log("you click on p", this);
    //$('p').hide(); <p> paragraph is function in hide using
    //(this).hide()
    //$('#id').hide()
    //$('.class').hide()
  }); // do this when we click on p


  // dbl click on function
  //$("p").dblclick(function () {
    //console.log("you double click on p", this);
    //$('p').hide(); <p> paragraph is function in hide using
    //(this).hide()
    //$('#id').hide()
    //$('.class').hide()
  //}); // do this when we click on p


// mouse enter click button
  //$("p").mouseenter(function () { 
    //console.log("you mouse enter double click on p", this);
    //$('p').hide(); <p> paragraph is function in hide using
    //(this).hide()
    //$('#id').hide()
    //$('.class').hide()
  //}); // do this when we click on p

  // mouse leave click button
  //$("p").mouseleave(function () { 
    //console.log("you mouse double click on p", this);
    //$('p').hide(); <p> paragraph is function in hide using
    //(this).hide()
    //$('#id').hide()
    //$('.class').hide()
  //}); // do this when we click on p

   //mouse hover click button
   //$("p").hover(function () { 
    //console.log("you mouse hover click on p", this);
    //$('p').hide(); <p> paragraph is function in hide using
    //(this).hide()
    //$('#id').hide()
    //$('.class').hide()
  //}, // do this when we click on p

  //function(){
    //console.log("thanks for comming")
  //)



//there are three type of selector
//1:Element selector
//2:id selector
//3:class selector

//1: Element selector - this is an examples of element selecter which clicks on all p element
//$('p').click();

//2: id selector - this is an examples of id selector
//$('second').click();

//3: class  selector - this is an examples of class selector
//$('odd').click();

//other selectors
// $('*').click() // clicks the on all elements
//$('p.odd').click()//clicks on all the elements
//$('p.first').click()//clicks on all the elements

//Events in jquery
//Mouse events = click,dbclick,mouseenter,mouseleave
//keyboardEvent = keypress,keydown,MediaKeyStatusMap
//form events = submit,change,focus,blur
//document/window events = load,resize,scroll,unload    

//demoing the on method
$('p').on(
    {
        click:function(){
    console.log("thanks for clicking",this)
        },
        mouseleave: function(){
            console.log("mouseleave")
        }
})

//$('#wiki').show() id content in show 
/*$('#wiki').hide(1000,function(){
    console.log("hidden")
}) 

$('#wiki').show(1000,function(){
    console.log("show")
})*/

//$('#beauty').click(function(){// toggle method is used to 1000= 1second in show content id
    //$('#wiki').toggle(1000);

 //$('#beauty').click(function(){// fadeOut  method is used to visible  5000= 1second in show content id
        //$('#wiki').fadeOut (5000);

//$('#beauty').click(function(){// fadeIn method is used to  hidden element 1000= 1second in show content id
            //$('#wiki').fadeIn (3000);
            
//$('#beauty').click(function(){// fadeOut method is used to  visible element 1000= 1second in show content id
                //$('#wiki').fadeOut (3000);
                
$('#beauty').click(function(){// fadeToggle method is used to  fadeIn() and fadeOut() element 1000= 1second in show content id
                    $('#wiki').fadeToggle (3000);  
})

$('#beauty').click(function(){// fadeOut method is used allows fading to a given opacity (value between 0 and 1).element 1000= 1second in show content id
                        $('#wiki').fadeTo (3000);

//$('#beauty').click(function(){
    //$('#wiki').fadeOut (5000);
//})


// fadeIn()
// fadeToggle()
// fadeTo
//$('#wiki').slideDown(1000) //top to bottom content show
//$('#wiki').slideUp(1000)//bottom to top content show
 
//Slide method - speed and callback parameters are  optional
//$('#wiki').slideUp(1000,function(){
    //console.log('done')
//})

//$('#wiki').slideToggle(1000)// show up to down , down to up or open in click button 
//$('#wiki').slideDown(1000)
//$('#wiki').slideUp(1000)

// animate function in jquery 
/*$('#wiki').animate({
    opacity:0.3,
    height: '150px',
    width: '350px'
} ,"slow")*/

/*$('#wiki').animate({opacity:0.3},4000);
$('#wiki').animate({opacity:0.3},1000);
$('#wiki').animate({width:'350px'},12000);


$('#ta').val('setting is to rohit');
$('#ta').html("setting to rohit");
$('#ta').html("setting to rohit");
$('#ta').html("setting to rohit");//inser html
$('#ta').val("setting to rohit");// add html tag inside change value
$('#inp').empty();
$('#wiki').empty();
$('#wiki').text('you are good'); //insert text in html 
$('#wiki').remove();//remove conent


$('#wiki').addClass('myclass')
$('#wiki').addClass2('myclass2')
$('#wiki').removeClass2('myclass2')
$('#wiki').css('background-color','red')
$('#wiki').css('background-color')*/

//Ajax using in jquery
//$.get("https://code.jquery.com/jquery-3.7.1.js",function(data,status){alert(status)})
//$.post("https://code.jquery.com/jquery-3.7.1.js",{name:'rohit',channel:'information technology'},function(data,status){alert(status)});


});
})






