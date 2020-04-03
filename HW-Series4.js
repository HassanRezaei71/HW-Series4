//      (1)
function converToJalali(str) {
    return moment(str).format('jYYYY/jM/jD');
}
document.getElementById('converToJalali').innerHTML = converToJalali('2020/03/02');

