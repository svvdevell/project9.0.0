"use strict"

// 1 

let date = new Date(2002, 5, 17);
console.log(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`);

// 2 

function getDiffDays(startDate, endDate) {
    let dataParse = Date.parse(endDate) - Date.parse(startDate);
    const millisecondsOnOneDay = 1000 * 60 * 60 * 24;
    if (startDate > endDate) {
        return console.error("Your start date is later than end");
    } else if (isNaN(dataParse)) {
        return console.error("Invalid Data");
    } else {
        return Math.ceil(dataParse / millisecondsOnOneDay);
        }
    }

console.log(getDiffDays("2020-01-01", "2020-01-17"));
console.log(getDiffDays("2020-01-01", "2020-03-15"));
console.log(getDiffDays("2021-01-02", "2020-03-15"));
console.log(getDiffDays("2222222222", "2020-03-15"));

