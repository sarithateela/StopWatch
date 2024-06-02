let startTime = null;
let elapsedTime = 0;
let timerInterval = null;

// Function to update the timer display
function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer');
    let time = elapsedTime;

    const hours = Math.floor(time / 3600000);
    time %= 3600000;
    const minutes = Math.floor(time / 60000);
    time %= 60000;
    const seconds = Math.floor(time / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    timerDisplay.innerText = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds) + '.' +
        (milliseconds < 10 ? '0' + milliseconds : milliseconds);
}

// Function to start the timer
function startTimer() {
    if (timerInterval !== null) return; // Prevent multiple intervals

    startTime = performance.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = performance.now() - startTime;
        updateTimerDisplay();
    }, 10);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Function to reset the timer
function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateTimerDisplay();
}

// Event listeners for the buttons
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

// Initial display update
updateTimerDisplay();
