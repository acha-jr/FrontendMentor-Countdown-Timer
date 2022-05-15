const seconds = document.querySelector("[seconds]");
const minutes = document.querySelector("[minutes]");
const hours = document.querySelector("[hours]");
const days = document.querySelector("[days]");

seconds.innerHTML = "00";
minutes.innerHTML = "00";
hours.innerHTML = "00";
days.innerHTML = "00";

let countDate = new Date("29 May, 2022 16:00:00").getTime();

const countdown = () => {
  //current time
  let now = new Date().getTime();

  //period between current time and end time
  let period = countDate - now;

  //units calculation
  days.innerHTML = Math.floor(period / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor(
    (period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.innerHTML = Math.floor((period % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerHTML = Math.floor((period % (1000 * 60)) / 1000);

  //Changes single digit values to two-digit
  const twoDigits = (e) => {
    if (e.innerHTML < 10) {
      e.innerHTML = "0" + e.innerHTML;
    }
  };
  twoDigits(days);
  twoDigits(hours);
  twoDigits(minutes);
  twoDigits(seconds);
};
setInterval(countdown, 1000);
