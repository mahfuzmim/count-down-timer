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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveAway = document.querySelector(".giveaway");
const deadLine = document.querySelector('.deadline');
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
 

// let futureDate = new Date(2022, 9, 3, 23, 59, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay+10, 23, 59, 0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const min = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveAway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${min}pm`;

const futureTime = futureDate.getTime();
function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime-today;

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;
  
  let days = t/oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let min = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000)

  const values = [ days, hours, min, seconds];

  
  items.forEach((item, index)=>{
    item.innerHTML = format(values[index]);
    
  })
  
  function format(item){
    if (item<10){
      return `0${item}`;
    }
    else {
      return item;
    }
  }
  if(t<0){
    clearInterval(countdown);
    deadLine.innerHTML = `<h4 class= "expired">sorry deadline has expired </h4>`


  }
}
let countdown = setInterval(getRemainingTime, 1000);
// getRemainingTime();


// items.forEach((item)=>{

// })