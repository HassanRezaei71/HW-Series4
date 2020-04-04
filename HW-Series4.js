//      (1)
function converToJalali(str) {
    moment.loadPersian({usePersianDigits: true});
    return moment(str).format('jYYYY/jM/jD');
}

document.getElementById('converToJalali').innerHTML = converToJalali('2020/03/02');
console.log("1) ", converToJalali('2020/03/02'));

//      (2)
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function differenceTwoDates(date1, date2) {
    date1 = date1.replace(/\s+/g, "").replace(/\//g, "-");
    date2 = date2.replace(/\s+/g, "").replace(/\//g, "-");
    date1 = new Date(date1);
    date2 = new Date(date2);
    let years = (date1.getFullYear() - date2.getFullYear());
    let months = ((date1.getMonth()) - (date2.getMonth()));
    let days = (date1.getDate() - date2.getDate());
    let hours = (date1.getHours() - date2.getHours());
    let minutes = (date1.getMinutes() - date2.getMinutes());
    let seconds = (date1.getSeconds() - date2.getSeconds());
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        days += monthDays[date2.getMonth()];
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    return {
        year: years, months: months, days: days, hours: hours,
        minutes: minutes, seconds: seconds
    };
}

document.getElementById('differenceTwoDates').innerText = JSON.stringify(differenceTwoDates('2020/08/01T12:22:41', '2020/02/20T23:19:01'));
console.log("2) ", differenceTwoDates('2020/08/01T12:22:41', '2020/02/20T23:19:01'));

//      (3)
function timeGap(array) {
    let sum = 0;
    let result = [];
    for (let i = 0; ; i++) {
        if (i + 1 === array.length) {
            break;
        }
        result.push(differenceTwoDates(array[i], array[i + 1]));
    }
    return result.reduce((a, b) => ({
        year: a.year + b.year, months: a.months + b.months,
        days: a.days + b.days, hours: a.hours + b.hours, minutes: a.minutes + b.minutes,
        seconds: a.seconds + b.seconds
    }));
}

document.getElementById('timeGap').innerHTML = JSON.stringify(timeGap(['2020-08-01T12:22', '2020-02-20T23:19', '2019-02-20T20:12']));
console.log("3) ", timeGap(['2020-08-01T12:22', '2020-02-20T23:19', '2019-02-20T20:12']));


//      (4)
function timeZone() {
    let event = new Date();
    let UTC = event.toLocaleString('en-US', {timeZone: 'UTC'});
    let Tehran = event.toLocaleString('fa-IR', {timeZone: 'Asia/Tehran'});
    return `UTC: ${UTC} - Tehran: ${Tehran}`;
}

console.log("4) ", timeZone());
document.getElementById('timeZone').innerHTML = timeZone();


//      (5)
function converToJalali2(date) {
    moment.loadPersian({usePersianDigits: true});
    return moment(date).local("fa").format('dddd، jD jMMMM jYYYY');
}

document.getElementById("converToJalali2").innerHTML = converToJalali2('2020/03/02');
console.log("5) ", converToJalali2('2020/03/02'));


//      (6)
function subsetString(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
        let temp = str[i];
        for (let j = i + 1; ; j++) {
            if (j === str.length) break;
            temp += str[j];
            result.push(temp);
        }
    }
    return result;
}

console.log("6) ", subsetString("hassan"));
document.getElementById('subsetString').innerHTML = JSON.stringify(subsetString("hassan"));


//      (7)
function keyValuePairs(obj) {
    return Object.entries(obj);
}

console.log("7) ", keyValuePairs({country: "Iran", capital: "Tehran", population: "18M"}));

//      (7)
function newKeyValuePairs(obj) {
    let result = [];
    for (let key in obj) {
        result.push([`${key}`, `${obj[key]}`]);
    }
    return result;
}

document.getElementById('keyValuePairs').innerHTML = JSON.stringify(newKeyValuePairs({
    country: "Iran",
    capital: "Tehran",
    population: "18M"
}));


//      (8)
function sortArrayObjects(array) {
    array.sort(function (a, b) {
        return b.libraryID - a.libraryID;
    })
    let result = JSON.stringify(array);
    return result;
}

let library = [{title: "The Road Ahead", author: "bill Gates", libraryID: 1254}, {
    title: "Wallter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264
}, {title: "The Final Book of The hunger Games", author: "Suzanne Collins", libraryID: 3245}];
document.getElementById('sortArrayObjects').innerText = sortArrayObjects(library);
console.log("8) ", sortArrayObjects(library));


//      (9)
function rangeNumber(number) {
    return (number * 5) / 100;
}

console.log("9) ",rangeNumber(70));
document.getElementById('rangeNumber').innerHTML = rangeNumber(70);


//      (10)
function changeTime(time, minutes) {
    time = new Date(time);
    return new Date(time.setMinutes(time.getMinutes() + 30));
}

console.log("10) ",changeTime('2014,10,2', 30));
document.getElementById('changeTime').innerHTML = changeTime('2014,10,2', 30);