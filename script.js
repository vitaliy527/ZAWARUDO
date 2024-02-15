const hourSelector = "#hours";
const minuteSelector = "#minutes"
const secondSelector = "#seconds";
const startButtonSelector = ".button__start";
const stopButtonSelector = ".button__stop";

const hours = document.querySelector(hourSelector);
const minutes = document.querySelector(minuteSelector);
const seconds = document.querySelector(secondSelector);
const buttonStart = document.querySelector(startButtonSelector);
const buttonStop = document.querySelector(stopButtonSelector);
const delaySeconds = 1;
setTimeout(() => {

}, 5000);

let remainingTime;
let indexInterval;
let hour;
let minute;
let second;

function startTimer(event){
    event.preventDefault();
    buttonStop.style.opacity = 1;
    hour = parseInt(hours.value);
    minute = parseInt(minutes.value);
    second = parseInt(seconds.value);
    remainingTime = hour * 3600 + minute * 60 + second;

    indexInterval = setInterval(updateTimer, delaySeconds * 1000);
    document.documentElement.requestFullscreen();
    hideElement(buttonStart);
    showElement(buttonStop);
}
function updateTimer(){
    if (remainingTime > 0){
        remainingTime--;
        hour = Math.floor(remainingTime / 3600);
        minute = Math.floor(remainingTime % 3600 / 60);
        second = remainingTime % 60;
        hours.value = hour.toString().padStart(2, "0");
        minutes.value = minute.toString().padStart(2, "0");
        seconds.value = second.toString().padStart(2, "0");
    }else{
        stopTimer();
    }  
}
    
function stopTimer(){
    clearInterval(indexInterval);
    setTimeout(() => {
        buttonStop.style.opacity = 0.5;
    },500)
    setTimeout(() => {
        document.exitFullscreen();
        hideElement(buttonStop);
        showElement(buttonStart);
    },1000)
}

function hideElement(element){
    element.classList.add("hide");
}
function showElement(element){
    element.classList.remove("hide");
}
buttonStart.addEventListener("click", startTimer);
buttonStop.addEventListener("click", stopTimer);