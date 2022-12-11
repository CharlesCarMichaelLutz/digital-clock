function showTime() {
  const time = new Date();
  let hours = time.getHours();
  const minutes = leadZero(time.getMinutes());
  const seconds = leadZero(time.getSeconds());
  const isAm = hours < 12 || hours === 0;
  const amPm = isAm ? 'AM' : 'PM';

  document.getElementById("now").textContent = 
  `${formatHour(hours)}:${minutes}:${seconds} ${amPm}`;
}

function showDate() {
  const today = new Date();
  const day = days[today.getDay()];
  const date = appendDateSuffix(today.getDate());
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  document.getElementById("current").textContent =
  `${day}, ${month} ${date}, ${year}`;
}

function leadZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;
  hour = hour === 0 ? hour + 12 : hour; 
  return hour
}

function appendDateSuffix(date) {
  if(date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;  
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

const months = [
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

setInterval(() => {
  showTime();
  showDate(); 
}, 1000);

showTime();
showDate(); 






