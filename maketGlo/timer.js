let timer = (deadline) => {
  let timerHours = document.getElementById("timer-hours");
  let timerMinutes = document.getElementById("timer-minutes");
  let timerSeconds = document.getElementById("timer-seconds");

  timerHours.textContent = new Date(deadline, timerHours);
};

timer("08 september 2022");
