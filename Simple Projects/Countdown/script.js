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

// *Note : Months are Zero indexed here, 0-Jan, 1-Feb, ...

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// TODO Add date +10 days ahead of a user
const tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// const futureDate = new Date(2023, 04, 24, 15, 30, 00);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

// *Good Trick
let month = futureDate.getMonth();
month = months[month];

let weekDay = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekDay}, ${date} ${month} ${year} ${hours}:${minutes}AM`;

// Future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    // *Time-Info
    /*
    1s = 1000ms
    1m = 60s
    1hr = 60m 
    1day = 24hr */

    // Values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // *Calculate all values
    let days = t / oneDay;
    days = Math.floor(days);

    let hours = Math.floor((t % oneDay) / oneHour); //? Why modulo operator used her??
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    //Set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });

    // What if times passes
    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `
            <h4 class="expired">Sorry, this giveaway has expired</h4>
            `;
    }
}

// Countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime(); // Imp to invoke this after countdown

// What if user comes after expiring ?
// Add a function to reset future Date, ahead of 10 days

/* Why modulo operator used here?? 
because I don't care if this gets back, but only remainder(Need more explaination).
*/
