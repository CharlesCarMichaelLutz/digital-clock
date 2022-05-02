
function launchTime() {
  let d = new Date();
  var hours = ('0' + d.getHours() % 12).slice(-2);  
  hours = hours ? hours : 12;

  var time = (hours + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2) + " " + (d.getHours() >= 12 ? 'PM' : 'AM'));
  document.getElementById("now").innerHTML = time;
}

const today = new Date();
 
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = days[today.getDay()];

const months = ["January", "February", "March", "April", "May", "June",
                 "July", "August", "September", "October", "November", "December"];
let month = months[today.getMonth()];

let dayOf = today.getDate();
let year = today.getFullYear();

var current = document.getElementById("current");
var date = (day + ", " + month + " " + dayOf + " " + year);  
current.innerHTML = date;

setInterval(launchTime, 1000);
launchTime();



