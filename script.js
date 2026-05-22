let counter = document.getElementById("counter");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let timer = null;

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(() => {
        milliseconds++;

        if (milliseconds == 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

        counter.innerHTML = `${m}:${s}:${ms}`;

    }, 10);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;

    counter.innerHTML = "00:00:00";
}
// Counter Up
let counters = document.querySelectorAll(".counter");

let Arr = Array.from(counters);

Arr.map((item) => {
    let count = 0;

    let targetNumber = item.dataset.number;

    let stop = setInterval(() => {
        count++;
        item.innerHTML = count;

        if (count == targetNumber) {
            clearInterval(stop);
        }
    }, 20);
});