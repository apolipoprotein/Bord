// alert(Date.now());
var d = new Date();


//debug
// console.log("day: "+d.getDay());
// console.log("month: "+d.getMonth());
// console.log("date: "+d.getDate());
// console.log("year: "+d.getFullYear());
// console.log("time: "+hours+":"+minutes);

setInterval(pickDay, 1000);
setInterval(pickMonth, 1000);
setInterval(modDate, 1000);
setInterval(modTime, 1000);


function pickDay(){
  let day = d.getDay();
  if (day == 0){
    day = "Sunday";
  }
  else if (day == 1){
    day = "Monday";
  }
  else if (day == 2){
    day = "Tuesday";
  }
  else if (day == 3){
    day = "Wednesday";
  }
  else if (day == 4){
    day = "Thursday";
  }
  else if (day == 5){
    day = "Friday";
  }
  else if (day == 6){
    day = "Saturday";
  }
  dot = document.getElementById("dotw");
  dot.innerHTML = day;
}

function pickMonth(){
  let month = d.getMonth();
  if (month == 0){
    month = "January";
  }
  if (month == 1){
    month = "February";
  }
  if (month == 2){
    month = "March";
  }
  if (month == 3){
    month = "April";
  }
  if (month == 4){
    month = "May";
  }
  if (month == 5){
    month = "June";
  }
  if (month == 6){
    month = "July";
  }
  if (month == 7){
    month = "August";
  }
  if (month == 8){
    month = "September";
  }
  if (month == 9){
    month = "October";
  }
  if (month == 10){
    month = "November";
  }
  if (month == 11){
    month = "December";
  }
  mon = document.getElementById("mnth");
  mon.innerHTML = month;
}

function modDate(){
  let date = d.getDate();
  let year = d.getFullYear();

  if (date%10 == 1){
    date += "st";
  }
  else if (date%10 == 2){
    date += "nd";
  }
  else if (date%10 == 3){
    date += "rd";
  }
  else {
    date += "th";
  }
  dat = document.getElementById("dt");
  dat.innerHTML = date + ', ' + year;
}

function modTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = 
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
