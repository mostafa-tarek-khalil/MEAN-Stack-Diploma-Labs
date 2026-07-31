// alert("Welcome to my site");
// var username = prompt("Enter your name");
// if (username != null) {
//     if (username == "") {
//         alert("Please enter data");
//     } else if (!isNaN(username)) {
//         alert("Invalid data");
//     } else {
//         alert("Welcome " + username);
//     }
// }
function sum(a, b) {
    if (a != null || b != null) {
        if (a == "" || b == "") {
            alert("Please enter data");
            return;
        }
        if (isNaN(a) || isNaN(b)) {
            alert("Invalid data");
            return;
        }
        var result = Number(a) + Number(b);
        alert(result);
        return result;
    }
}
function lessThanOrEqualToZero(num) {
    if (num != null) {
        if (num == "") {
            alert("Please enter data");
            return;
        }
        if (isNaN(num)) {
            alert("Invalid data");
            return;
        }
        var result = (num <= 0) ? true : false;
        alert(result);
    }
}
function userday(day) {
    if (day != null) {

        if (day == "") {
            alert("Please enter data");
            return;
        }
        if (!isNaN(day)) {
            alert("Invalid data");
            return;
        }
        switch (day.toLowerCase()) {
            case "sunday":
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
                alert("Work Day");
                break;
            case "friday":
            case "saturday":
                alert("Holiday");
                break;
            default:
                alert("Invalid Data");
        }
    }
}
function area(base, height) {
    if (base != null && height != null) {
        if (base == "" || height == "") {
            alert("Please enter data");
            return;
        }
        if (isNaN(base) || isNaN(height)) {
            alert("Invalid data");
            return;
        }
        base = Number(base);
        height = Number(height);
        var result = (base * height) / 2;
        alert(result);
    }
}