
    let secondsPassed = 0;
    let isRunning = false;
    let interval;

    const timerDisplay = document.getElementById("timer");

    function formatTime(sec) {
      const mins = Math.floor(sec / 60);
      const secs = sec % 60;
      return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }

    function updateDisplay() {
      timerDisplay.textContent = formatTime(secondsPassed);
    }

    function startTimer() {
      if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
          secondsPassed++;
          updateDisplay();
        }, 1000);
      }
    }

    function pauseTimer() {
      clearInterval(interval);
      isRunning = false;
    }

    function resetTimer() {
      clearInterval(interval);
      isRunning = false;
      secondsPassed = 0;
      updateDisplay();
    }

    updateDisplay(); // show 00:00 on load

