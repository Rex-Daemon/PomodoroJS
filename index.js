let counter;
let workDuration = 1500;
let LongBreakDuration = 900
let shortBreakDuration = 300;
let workRemaining = workDuration;
let timerRunning;


window.onload = function () {

    const startButton = document.querySelector('#start');
    startButton.addEventListener('click', sessionStart);

    const pauseButton = document.querySelector('#pause');
    pauseButton.addEventListener('click', sessionPause);

    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', sessionReset);

    const workButton = document.querySelector('#work');
    workButton.addEventListener('click', work);

    const shortBreakButton = document.querySelector('#short-break');
    shortBreakButton.addEventListener('click', shortBreak);

    const longBreakButton = document.querySelector('#long-break');
    longBreakButton.addEventListener('click', longBreak);

}

function sessionStart() {
    timerRunning = true;
    if (workRemaining == workDuration) {
        timer(workDuration);
    }
    // acts as resume button
    else {
        timer(workRemaining);
    }
}

function sessionPause() {
    timerRunning = false;
    clearInterval(counter);
}

function sessionResume() {
    if (!timerRunning) {
        timer(sessionRemaining)
        timerRunning = true;
    }
}


function sessionReset() {
    clearInterval(counter);
    displayTimer(workDuration);
    workRemaining = workDuration;
    timerRunning = undefined;
}


function work() {
    timer(workDuration);
}

function shortBreak() {
    timer(shortBreakDuration);
}

function longBreak() {
    timer(LongBreakDuration);
}

function timer(count) {
    displayTimer(count)
    clearInterval(counter);

    counter = setInterval(() => {
        count = count - 1;
        if (count < 0) {
            clearInterval(counter);
            return;
        }
        displayTimer(count)
    }, 1000);
}


function displayTimer(seconds) {
    const minutesRemaining = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    const displayText = `${minutesRemaining < 10 ? '0' : ''}${minutesRemaining}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;

    const timerText = document.querySelector("#timer-text");
    timerText.textContent = displayText;
    document.title = 'PomodoroJS - ' + displayText;

}