var start = document.getElementById("start");
var reset = document.getElementById("reset");

var wm = document.getElementById("wminutes");
var ws = document.getElementById("wseconds");

var bm =document.getElementById("bminutes");
var bs = document.getElementById("bseconds");

var startTimer;
var timer;

function timer() {
   
    if(ws.innerText!= 0){
        ws.innerText--;
    }else if(wm.innerText !=0 && ws.innerText ==0){
        ws.innerText =59;
        wm.innerText--;
    }
     if(wm.innerText==0 && ws.innerText==0){ if(bs.innerText!=0){
         bs.innerText--;
     }else if(bm.innerText!=0 && bs.innerText ==0){
         bm.innerText--;
        bs.innerText=59;
     }
        
 }return;
    
 }
start.addEventListener("click",function(){

    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        },1000);
    }
    startInterval();


})

reset.addEventListener("click",function(){


wm.innerText=0;
ws.innerText=0;
bm.innerText=0;
bs.innerText=0;
 stopInterval()
 
})


function stopInterval(){
    clearInterval(startTimer);
}
