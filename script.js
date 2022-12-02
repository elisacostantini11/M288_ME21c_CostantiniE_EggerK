function removeAlerts() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("erroruser").innerHTML = "";
    document.getElementById("errorpwd").innerHTML = "";
    document.getElementById("errorpwdchar").innerHTML = "";
}

function validateForm() {
    removeAlerts();

    var username = document.forms["myForm"]["user"].value;
    var pwd = document.forms["myForm"]["pass"].value;

    if (!username && !pwd) {
        document.getElementById("error").innerHTML = "Please input username and password";
        return false;
    } else if (username == null || username == "") {
        document.getElementById("erroruser").innerHTML = "Please input your username";
        return false;
    } else if (pwd == null || pwd == "") {
        document.getElementById("errorpwd").innerHTML = "Please input your password";
        return false;
    } else if (pwd.length < 6) {
        document.getElementById("errorpwdchar").innerHTML = "Your password must be minimum 6 characters";
        return false;
    } else if (username.length > 15) {
        document.getElementById("erroruser").innerHTML = "Your username must not be longer than 15 characters";
        return false;
    } else if (pwd.search(/[A-Z]/) < 0) {
        document.getElementById("errorpwdchar").innerHTML = "Your password must contain an uppercase letter";
        return false;
    } else if (pwd.search(/[a-z]/) < 0) {
        document.getElementById("errorpwdchar").innerHTML = "Your password must contain an lowercase letter";
        return false;
    } else if (pwd.search(/[!?*#.,@%&+-ç=)("^`£$:;°§¨)]/) < 0) {
        document.getElementById("errorpwdchar").innerHTML = "Your password must contain an special charachter";
        return false;
    }
}
