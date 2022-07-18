let time;
const sound = new Audio("./vendor/timeUp.mp3");

const timer = document.querySelector(".timer");
const button = document.querySelector(".button");
const input = document.querySelector(".input");

let interval

button.addEventListener("click", startTimer);

function counter() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.innerText = `${minutes}:${seconds}`;
  if (time == 0) {
    console.log('time is up');
    timer.innerText = "Time Is Up!";
    clearInterval(interval);
    sound.play();
    return
  } else {
    time--;
  }
}


function startTimer() {
  interval = setInterval(counter, 1000);
  time = input.value;
  interval;
  input.value = "";
}
