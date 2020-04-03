//      (1)
function converToJalali(str) {
    return moment(str).format('jYYYY/jM/jD');
}

document.getElementById('converToJalali').innerHTML = converToJalali('2020/03/02');

//      (2)

const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
function difference2Dates(date1, date2) {
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
    if (hours<0){
        hours += 24;
        days--;
    }
    if(days<0){
        days += monthDays[date2.getMonth()];
        months--;
    }
    if(months<0){
        months+=12;
        years--;
    }
    return `{year:${years}, months:${months}, days:${days}, hours:${hours},
     minutes:${minutes}, seconds:${seconds}}`;
}

console.log(difference2Dates('2020/08/01 T 12:22:41', '2020/03/20 T 23:19:01'));