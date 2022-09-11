let timer = () => {
  let timerHours = document.getElementById("timer-hours");
  let timerMinutes = document.getElementById("timer-minutes");
  let timerSeconds = document.getElementById("timer-seconds");

  let getTmeRemining = (deadLine) => {
    let timeStop = new Date(deadLine).getTime();
    let timeNow = new Date().getTime();
    let endTime = (timeStop - timeNow) / 1000;

    let hours = Math.floor(endTime / 60 / 60);
    let minutes = Math.floor(endTime / 60) % 60;
    let seconds = Math.floor(endTime % 60);

    return { endTime, hours, minutes, seconds };
  };

  let updateTime = () => {
    let getTime = getTmeRemining("22 september 2022");

    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if (getTime.endTime > 0) setTimeout(updateTime, 1000);
    if (getTime.endTime <= 0) {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    } else {
      timerHours.textContent = addZerro(getTime.hours);
      timerMinutes.textContent = addZerro(getTime.minutes);
      timerSeconds.textContent = addZerro(getTime.seconds);
    }
  };
  const addZerro = (num) => (num < 10 ? "0" + num : num);
  updateTime();
};
timer();
