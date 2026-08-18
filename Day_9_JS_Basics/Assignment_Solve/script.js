try {
    var regexn = /^[a-zA-Z]{3,}([ ]{1,1}[a-zA-Z]{3,})+$/;
    let username = prompt("Enter your name");
    if (username != null) {
        if (username == '') {
            alert("please enter data");
        }
        else {
            if(regexn.test(username))
            {
                alert("true")
            }
            else
            {
                alert("Enter valid data")
            }

        }
    }

    var regexe = /^[a-zA-Z]{3,}(@)(gmail|yahoo|outlook)(\.com|\.net|\.edu|\.org)(\.eg)$/
    var useremail = prompt("Enter your email");
    if (useremail != null) {
        if (useremail == '') {
            alert("please enter data");
        }
        while (!regexe.test(useremail)) {
            useremail = prompt("Enter your email");
            if (useremail == '') {
                alert("please enter data");
            }
        }
        if(regexn.test(useremail))
            {
                alert("true")
            }
    }
}
catch (error) {
    console.log(error);
}
let win;
function openwin() {
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    win = window.open("./index3.html", "_popup", `width=${w},height=${h}`);

    setTimeout(function () {
        if (win) {
            win.close();
        }
    }, 3000);
}
function closewin() {
    if (win) {
        win.close();
    }
}

function validate()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === '' || password === '') {
        alert("Please enter data");
        return false; 
    }
    return true;
}
