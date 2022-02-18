var prnDt = new Date();

let a = new Intl.DateTimeFormat('en', { weekday: 'short'}).format(prnDt);
let b = new Intl.DateTimeFormat('en', { month: 'short' }).format(prnDt);
let c = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(prnDt);
let d = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(prnDt);

document.getElementById("days").innerHTML = (a + ", " + b + ". " + c + ", " + d);

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

document.getElementById("daysleft").innerHTML = (datediff(parseDate(prnDt.toLocaleDateString()), parseDate("5/25/" + prnDt.getFullYear())) - 37) + " days left in the school year";