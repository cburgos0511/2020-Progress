setInterval(() => {
  let d = new Date();
  d.setMonth(0);
  d.setDate(1);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);

  //calculates seconds from start of year

  let now = new Date();
  let yElapsed = now - d;

  //calculate year progress

  let spy = secondsInYear(now.getFullYear());
  let yPerc = yElapsed / 1000 / spy;
  yPerc = Math.round(yPerc * 10000000) / 100000;
  document.getElementById("year-perc").innerHTML = yPerc + "%";
  document.getElementById("year-prog").style.width = yPerc + "%";

  //calculate month progress

  let currentMonth = new Date();
  currentMonth.setDate(1);
  currentMonth.setHours(0);
  currentMonth.setMinutes(0);
  currentMonth.setSeconds(0);
  currentMonth.setMilliseconds(0);

  let mElapsed = now - currentMonth;
  let spm = secondsInMonth(now.getFullYear(), now.getMonth() + 1);
  let mperc = mElapsed / 1000 / spm;
  mperc = Math.round(mperc * 1000000) / 10000;
  document.getElementById("month-perc").innerHTML = mperc + "%";
  document.getElementById("months-prog").style.width = mperc + "%";

  //  calculate day

  let currentDay = new Date();
  currentDay.setHours(0);
  currentDay.setMinutes(0);
  currentDay.setSeconds(0);
  currentDay.setMilliseconds(0);
  let dElapsed = now - currentDay;
  let dperc = dElapsed / 1000 / 86400;
  dperc = Math.round(dperc * 1000000) / 10000;
  document.getElementById("day-perc").innerHTML = dperc + "%";
  document.getElementById("day-prog").style.width = dperc + "%";

  // calculate hour

  let currentHr = new Date();
  currentHr.setMinutes(0);
  currentHr.setSeconds(0);
  currentHr.setMilliseconds(0);
  let hElapsed = now - currentHr;
  let hperc = hElapsed / 1000 / 3600;
  hperc = Math.round(hperc * 1000000) / 10000;
  document.getElementById("hour-perc").innerHTML = hperc + "%";
  document.getElementById("hours-prog").style.width = hperc + "%";

  let currentMin = new Date();
  currentMin.setSeconds(0);
  currentMin.setMilliseconds(0);
  let minElapsed = now - currentMin;
  let minperc = minElapsed / 1000 / 60;
  minperc = Math.round(minperc * 1000000) / 10000;
  document.getElementById("minute-perc").innerHTML = minperc + "%";
  document.getElementById("minutes-prog").style.width = minperc + "%";
}, 1000);

/////////////////////
//HELPERS
function secondsInYear(year) {
  if (leapYear(year)) {
    return 31622400;
  } else {
    return 31536000;
  }
}

function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function secondsInMonth(year, month) {
  let sim = new Date(year, month, 0).getDate() * 24 * 3600;
  return sim;
}
