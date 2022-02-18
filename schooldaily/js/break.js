
const date = new Date();
const year = date.getFullYear();
const breaks = [
    new Date(year, 8, 20),
    new Date(year, 9, 6), 
    new Date(year, 10, 7),
    new Date(year, 10, 8),
    new Date(year, 11, 2),
    new Date(year, 11, 22), 
    new Date(year, 11, 23), 
    new Date(year, 11, 24), 
    new Date(year, 11, 25), 
    new Date(year, 11, 26), 
    new Date(year, 12, 20), 
    new Date(year, 12, 21), 
    new Date(year, 12, 22), 
    new Date(year, 12, 23), 
    new Date(year, 12, 24), 
    new Date(year, 12, 27), 
    new Date(year, 12, 28), 
    new Date(year, 12, 29), 
    new Date(year, 12, 30), 
    new Date(year, 1, 3),

    new Date(year, 1, 17),
    new Date(year, 2, 21),
    new Date(year, 3, 18),
    new Date(year, 3, 28),
    new Date(year, 3, 29),
    new Date(year, 3, 30),
    new Date(year, 3, 31),
    new Date(year, 4, 1), 
]

const reasons = [
"No classes",
"Labor Day",
"Fall break",
"Fall break",
"Election day",
"Thanksgiving break",
"Thanksgiving break",
"Thanksgiving break",
"Thanksgiving break",
"Thanksgiving break",
"Winter break",
"Winter break",
"Winter break",
"Winter break",
"Winter break",
"Winter break",
"Winter break",
"Winter break",
"Winter break",
"Winter break",
"Martin Luther King Jr. day",
"Presidents day",
"No classes",
"Spring break",
"Spring break",
"Spring break",
"Spring break",
"Spring break",
]


function nearest (dates, target) {
    if (!target) target = Date.now()
    else if (target instanceof Date) target = target.getTime()
  
    var nearest = Infinity
    var winner = -1
  
    dates.forEach(function (date, index) {
      if (date instanceof Date) date = date.getTime()
      var distance = Math.abs(date - target)
      if (distance < nearest) {
        nearest = distance
        winner = index
      }
    })
  
    return winner
}

var target = new Date(year, 2, date.getDate());
var index = nearest(breaks, target)
let dayte = breaks[index]
let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(dayte);
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dayte);

var dayoff = month + ". " + day + " - " + reasons[index];
document.getElementById("break").innerHTML = dayoff;
