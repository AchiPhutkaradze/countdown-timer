const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function myfunction() {
  let time = new Date("december 29,2023 21:48:00").getTime();

  let now = new Date();
  let clock = time - now;
  let d = Math.floor(clock / (1000 * 60 * 60 * 24));
  let h = Math.floor((clock % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((clock % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((clock % (1000 * 60)) / 1000);

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
setInterval(myfunction, 1000);
