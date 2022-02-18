function even(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function dateCheck(from,to,check) {

    var fDate,lDate,cDate;
    fDate = Date.parse(from);
    lDate = Date.parse(to);
    cDate = Date.parse(check);

    if((cDate <= lDate && cDate >= fDate)) {
        return true;
    }
    return false;
}

function semester(date) {

    const year = date.getFullYear();

    const semester1 = {start: new Date(year, 8, 11), end: new Date(year, 12, 17)};
    const semester2 = {start: new Date(year, 1, 4), end: new Date(year, 5, 24)};
    const summer = {start: new Date(year, 5, 25), end: new Date(year, 8, 10)};
    const current = new Date(year, date.getMonth(), date.getDate());

    if (dateCheck(semester1.start,semester1.end,current)) {
        return 1;
    } else if (dateCheck(semester2.start,semester2.end,current)) {
        return 2;
    } else if (dateCheck(summer.start,summer.end,current)) {
        return 3;
    } else {
        return 4;
    }
}

function getBlockDay(semester) {

    const date = new Date();

    if (semester == 1) {
        if (even(date.getDate())) {
            return "B";
        } else if (!even(date.getDate())) {
            return "A";
        } else {
            return "Error No day found";
        }
    } else if (semester == 2) {
        if (even(date.getDate())) {
            return "A";
        } else if (!even(date.getDate())) {
            return "B";
        } else {
            return "Error No day found";
        }
    } else if (semester == 3) {
        return "Summer";
    } else if (semester == 4){
        return "Error No semester found";
    } 
    return "Error No semester found";
}

document.getElementById("time").innerHTML = getBlockDay(semester(new Date()));
