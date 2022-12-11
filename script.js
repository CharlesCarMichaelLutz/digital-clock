function launchTime() {
  //constructor
  let newDate = new Date();
  var currentHours = ('0' + newDate.getHours() % 12).slice(-2);  
  currentHours = currentHours ? currentHours : 12;

  var currentTime = (currentHours + ":" + ('0' + newDate.getMinutes()).slice(-2) + ":" + ('0' + newDate.getSeconds()).slice(-2) + " " + (newDate.getHours() >= 12 ? 'PM' : 'AM'));
  document.getElementById("now").innerText = currentTime;
}

const today = new Date();
 
const daysOfTheWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

let day = daysOfTheWeek[today.getDay()];

const monthsOfTheYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

let month = monthsOfTheYear[today.getMonth()];

let dayOf = today.getDate();
let year = today.getFullYear();

var current = document.getElementById("current");
var date = (day + ", " + month + " " + dayOf + " " + year);  
current.innerHTML = date;

setInterval(launchTime, 1000);
launchTime();


/* The Date constructor creates a static Date object,
then methods can be used to operate on it 

JavaScript returns the Date in a string by default 
 */




