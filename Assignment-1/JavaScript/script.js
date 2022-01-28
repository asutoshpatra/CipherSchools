var ms=0,s=0,m=0;
var timer;
var stopWatch = document.querySelector(".Stopwatch");
function start(){
    if(!timer){
        timer = setInterval(counter,10);
    }
    
}
function counter(){
    stopWatch.innerHTML=(m<10?"0"+m:m)+":"+(s<10?"0"+s:s)+":"+(ms<10?"0"+ms:ms);
    ms++;
    if(ms==100){
        ms=0;
        s++;
    }
    if (s==60){
        s=0;
        m++;
    }
}
function stop(){
    clearInterval(timer);
    timer= !timer;
}
function reset(){
    stop();
    ms=0;
    s=0;
    m=0;
    stopWatch.innerHTML=(m<10?"0"+m:m)+":"+(s<10?"0"+s:s)+":"+(ms<10?"0"+ms:ms);
}
