let counter;
let workDuration = 15;
let shortBreakDuration = 5;
let LongBreakDuration = 10
let workRemaining = workDuration;
let pomodoroCount = 0;
let timerRunning; 


window.onload = function () {

    const startButton = document.querySelector('#start');
    startButton.addEventListener('click', sessionStart);

    const pauseButton = document.querySelector('#pause');
    pauseButton.addEventListener('click', sessionPause);

    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', sessionReset);

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

function sessionReset() {
    clearInterval(counter);
    displayTimer(workDuration);
    workRemaining = workDuration;
    pomodoroCount = 0;
    timerRunning = undefined;
}


function timer(count) {
    displayTimer(count);
    /* console.log(count); */

    return new Promise(resolve => {
        counter = setInterval(() => {
            count = count - 1;
            if (count < 0) {
                clearInterval(counter);
                resolve(); //it is resolved when the count finishes
            }
            workRemaining = count;
            if (count >= 0){
                displayTimer(count);
                /* console.log(count); */
            }
        }, 1000);
    });
}


function displayTimer(seconds) {
        const minutesRemaining = Math.floor(seconds / 60);
        const secondsRemaining = seconds % 60;
        const displayText = `${minutesRemaining < 10 ? '0' : ''}${minutesRemaining}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;

        const timerText = document.querySelector("#timer-text");
        timerText.textContent = displayText;
}

