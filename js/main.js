
let timer;
let sec = 0;
let min = 0;
let hour = 0;

let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");
let timer_element = document.getElementById("timer");


    start_btn.addEventListener('click', function(){
      timer = setInterval(TimerHandler, 1000);
      reset_btn.disabled = true;
    });


    stop_btn.addEventListener('click', function(){
      timer = clearInterval(timer);
      reset_btn.disabled = false;
    });

    reset_btn.addEventListener('click', function(){
      timer = clearInterval(timer);
      reset_btn.disabled = true;
      sec = 0;
      min = 0;
      hour = 0;
      timer_element.innerHTML = "00:00:00";
    });

function TimerHandler(){
    sec ++;
    if(sec == 60){
        sec = 0;
        min++;
    }

    if(min == 60){
      min == 0;
      hour++;
    }

    DisplayTime()
}


function DisplayTime() {
    let secPretty = sec;
    let minPretty = min;
    let hourPretty = hour;
    
  if(sec < 10){
     secPretty = "0" + sec;
  }
  if(min < 10){
     minPretty = "0" + min;
  }
  if(hour < 10){
     hourPretty = "0" + hour;
  }

timer_element.innerHTML = hourPretty + ':' + minPretty + ':' + secPretty;
}
