const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const winter = "1 December 2021";

const countdown = function () {
  const wintersDate = new Date(winter);
  const currentDate = new Date();
  const totalSeconds = (wintersDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  console.log(days, hours, minutes, seconds);
};

const formatTime = function (time) {
  return time < 10 ? `0${time}` : time;
};

//Initial call
countdown();

setInterval(countdown, 1000);
``;
