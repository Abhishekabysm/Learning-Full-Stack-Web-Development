function setClockHands() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12; //Covert 24-hour format to 12-hour format

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;

  document.querySelector(
    ".second-hand"
  ).style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
  document.querySelector(
    ".minute-hand"
  ).style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
  document.querySelector(
    ".hour-hand"
  ).style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

function setNumbers() {
  const clockFace = document.querySelector(".clock-face");
  for (let i = 1; i <= 12; i++) {
    const number = document.createElement("div");
    // number.className = "number";
    number.classList.add("number");
    number.textContent = i;
    const angle = (i - 3) * 30 * (Math.PI / 180);
    const x = 135 + 120 * Math.cos(angle);
    const y = 135 + 120 * Math.sin(angle);
    number.style.left = `${x}px`;
    number.style.top = `${y}px`;
    clockFace.appendChild(number);
  }
}

// setNumbers();
// setClockHands();
// setInterval(setClockHands, 1000);

let digital = document.querySelector(".digital-clock");
function digitalClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  digital.innerHTML = timeString;
}

setNumbers();
setClockHands();
setInterval(setClockHands, 1000);

setInterval(() => {
  digitalClock();
}, 1000);
