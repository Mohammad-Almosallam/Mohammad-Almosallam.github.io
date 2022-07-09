let startingMinutes = 25;
let time = startingMinutes * 60;
let isPaused = false;
let isBreak = true;
let timer = setInterval(updateTimer,1000)
const countdown = document.getElementById('countdown');

function replay(){
    startingMinutes = 25
    time = startingMinutes * 60
    isBreak = true
    timer = setInterval(updateTimer,1000)
}

document.getElementById("pause").addEventListener("click",pauseTimer);
document.getElementById("play").addEventListener("click",playTimer);
document.getElementById("edit").addEventListener("click",editTimer)
window.addEventListener("keypress",keyPress);

function updateTimer(){
    if(time === 0){
        if(!isBreak){
            document.querySelector(".break").classList.remove("break-active");
            clearInterval(timer);
            replay()
        }else{
            animateConfetti()
            document.querySelector(".break").classList.add("break-active");
            clearInterval(timer);
            breakTimer()
        }
    }
    else if(!isPaused){            
        time--;
        formatTime()
    }
}
function breakTimer(){
    startingMinutes = 5
    time = startingMinutes * 60
    isBreak = false
    timer = setInterval(updateTimer,1000)
}
function formatTime(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    countdown.innerHTML = `${minutes}:${seconds}`
}
function pauseTimer(){
    isPaused = true;
    document.querySelector(".paused").classList.add("paused-active");
}
function playTimer(){
    isPaused = false;
    document.querySelector(".paused").classList.remove("paused-active");
}
function editTimer(){
    // pauseTimer()
    // needs to be completed
}
function keyPress(e){
    if(e.keyCode === 32 && isPaused){
        playTimer()
    }
    else if (e.keyCode === 32 && !isPaused){
        pauseTimer()
    }
}
function animateConfetti(){
    var duration = 10 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        // launch a few confetti from the left edge
        confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
        });
        // and launch a few from the right edge
        confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
        });

        // keep going until we are out of time
        if (Date.now() < end) {
        requestAnimationFrame(frame);
        }
    }());
}