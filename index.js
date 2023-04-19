// when keys are pressed in screen
var noOfDrumButtons=document.querySelectorAll(".drum").length;
var i=0;
while(i<noOfDrumButtons){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     
        var buttonInnerHTML=this.innerHTML;
       makeSound(buttonInnerHTML);
       buttonBlink(buttonInnerHTML);
    }
    )
    
    
    i++;}

 // when keybord keys are pressed

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonBlink(event.key);
});
 
function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
              tom1.play();
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
              tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
              tom3.play();
            break;
        
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
              tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
             snare.play();
            break;
        case "l":
            var crash=new Audio("sounds/crash.mp3");
             crash.play();
            break;
        case "k":
             var kick=new Audio("sounds/kick-bass.mp3") ;
              kick.play();
            break;      
        default:
            break;
    }
}
function buttonBlink(currentKey){
    var activeKey=document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}