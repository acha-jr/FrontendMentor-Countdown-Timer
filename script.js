const seconds = document.querySelector("[seconds]");
const minutes = document.querySelector("[minutes]");
const hours = document.querySelector("[hours]");
const days = document.querySelector("[days]");

seconds.innerHTML = "00";
minutes.innerHTML = "00";
hours.innerHTML = "00";
days.innerHTML = "00";

// End time
let countDate = new Date("3 July, 2022 11:59:59").getTime();

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

  if (days.innerHTML < 0) {
    days.innerHTML = 0;
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
  }
  
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
